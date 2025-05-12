<?php

namespace App\Http\Controllers;

use App\Models\HealthAssessment;
use App\Models\AssessmentResult;
use Illuminate\Http\Request;

class HealthAssessmentController extends Controller
{
    public function index()
    {
        $assessments = HealthAssessment::select('chi_tieu')->distinct()->get();
        $assessmentOptions = [];
        foreach ($assessments as $assessment) {
            $options = HealthAssessment::where('chi_tieu', $assessment->chi_tieu)
                ->pluck('muc_danh_gia')
                ->unique()
                ->values();
            $assessmentOptions[$assessment->chi_tieu] = $options;
        }
        return view('phieududoanbenh.index', [
                'assessments' => $assessments,
                'assessmentOptions' => $assessmentOptions,
                'title' => 'Phiếu dự đoán Bệnh'
            ]);
    }

    public function submit(Request $request)
    {
        $answers = $request->input('answers', []);
        $totalScore = 0;
        $recommendations = []; // Có thể mở rộng để thêm khuyến nghị nếu cần

        $assessments = HealthAssessment::select('chi_tieu')->distinct()->get();

        foreach ($assessments as $index => $assessment) {
            $userAnswer = $answers[$index] ?? null;

            if ($userAnswer) {
                $matchingRecord = HealthAssessment::where('chi_tieu', $assessment->chi_tieu)
                    ->where('muc_danh_gia', $userAnswer)
                    ->first();

                if ($matchingRecord) {
                    $totalScore += $matchingRecord->diem_danh_gia;
                }
            }
        }

        $result = new AssessmentResult();
        $result->total_score = $totalScore;
        $result->recommendations = json_encode([]); // Chưa có khuyến nghị cụ thể, có thể mở rộng
        $result->save();

        return redirect()->route('health-assessment.results')->with('success', 'Đánh giá hoàn tất!');
    }

    public function results()
    {
        $results = AssessmentResult::all();
        return view('phieududoanbenh.results', [
            'results' => $results,
            'title' => 'Phiếu dự đoán Bệnh'
        ]);
    }
}
