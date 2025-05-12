<?php

namespace App\Http\Controllers;

use App\Models\LivestockRiskAssessment;
use App\Models\AssessmentResult;
use Illuminate\Http\Request;

class AssessmentController extends Controller
{
    public function index(Request $request)
    {
        // Lấy danh sách QuyMoChanNuoi duy nhất
        $quyMoChanNuoiList = LivestockRiskAssessment::select('QuyMoChanNuoi')
            ->distinct()
            ->pluck('QuyMoChanNuoi')
            ->filter()
            ->values()
            ->toArray();

        // Lấy danh sách câu hỏi duy nhất, có thể lọc theo QuyMoChanNuoi
        $query = LivestockRiskAssessment::select('CacYeuToNguyCo')->distinct();
        if ($request->has('quy_mo') && !empty($request->input('quy_mo'))) {
            $query->where('QuyMoChanNuoi', $request->input('quy_mo'));
        }
        $questions = $query->get();

        // Lấy tất cả lựa chọn cho từng câu hỏi
        $questionOptions = [];
        foreach ($questions as $question) {
            $options = LivestockRiskAssessment::where('CacYeuToNguyCo', $question->CacYeuToNguyCo)
                ->pluck('NoiDungTraLoi')
                ->unique()
                ->values();
            $questionOptions[$question->CacYeuToNguyCo] = $options;
        }

        return view('admin.antoansinhhoc.index', [
            'questions' => $questions,
            'questionOptions' => $questionOptions,
            'quyMoChanNuoiList' => $quyMoChanNuoiList,
            'title' => 'An toàn sinh học'
        ]);
    }

    public function submit(Request $request)
    {
        $answers = $request->input('answers', []);
        $totalScore = 0;
        $recommendations = [];

        // Lấy danh sách câu hỏi duy nhất để ánh xạ câu trả lời
        $uniqueQuestions = LivestockRiskAssessment::select('CacYeuToNguyCo')->distinct()->get();

        // Duyệt qua từng câu hỏi duy nhất
        foreach ($uniqueQuestions as $index => $uniqueQuestion) {
            // Lấy câu trả lời của người dùng cho câu hỏi này
            $userAnswer = $answers[$index] ?? null;

            if ($userAnswer) {
                // Tìm bản ghi trong bảng khớp với câu hỏi và câu trả lời của người dùng
                $matchingRecord = LivestockRiskAssessment::where('CacYeuToNguyCo', $uniqueQuestion->CacYeuToNguyCo)
                    ->where('NoiDungTraLoi', $userAnswer)
                    ->first();

                if ($matchingRecord) {
                    $totalScore += $matchingRecord->Diem;
                    if (!empty($matchingRecord->KhuyenNghi)) {
                        $recommendations[] = $matchingRecord->KhuyenNghi;
                    }
                }
            }
        }

        // Lưu kết quả vào cơ sở dữ liệu
        $result = new AssessmentResult();
        $result->total_score = $totalScore;
        $result->recommendations = json_encode(array_unique($recommendations));
        $result->save();

        // Chuyển hướng đến trang hiển thị tất cả kết quả
        return redirect()->route('assessment.results')->with('success', 'Đánh giá hoàn tất!');
    }

    public function results()
    {
        // Lấy tất cả kết quả từ bảng assessment_results
        $results = AssessmentResult::all();
        return view('admin.antoansinhhoc.results', [
            'results' => $results,
            'title' => 'An toàn sinh học'
        ]);
    }
}
