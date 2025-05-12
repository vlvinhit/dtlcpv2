<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\NhomCHCTL;
use Illuminate\Http\Request;

class NhomCHCTLController extends Controller
{
    public function index()
    {
        $get_all_nhomcauhoitraloi = NhomCHCTL::orderbyDesc('id')->paginate(20);
        return view('admin.nhomcauhoitraloi.index',[
            'title' => 'Quản lý Nhóm câu hỏi - trả lời',
            'get_all_nhomcauhoitraloi' => $get_all_nhomcauhoitraloi,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'nhom_cau_hoi' => 'required',
        ]);
        try {
            NhomCHCTL::create([
                'nhom_cau_hoi' => (string) $request->input('nhom_cau_hoi'),
                'mo_ta' => (string) $request->input('mo_ta'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Nhóm câu hỏi - trả lời thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(NhomCHCTL $nhomcauhoitraloi)
    {
        #dd($qlDiemDich);
        return view('admin.nhomcauhoitraloi.edit',[
            'title' => 'Chỉnh sửa Cảnh báo',
            'nhomcauhoitraloi' => $nhomcauhoitraloi
        ]);
    }
    public function update(Request $request)
    {
        $NhomCHCTL= NhomCHCTL::where('id', $request->nhomcauhoitraloi_id)->first();
        try {
            $NhomCHCTL->nhom_cau_hoi = (string) $request->input('nhom_cau_hoi');
            $NhomCHCTL->mo_ta = (string) $request->input('mo_ta');
            $NhomCHCTL->ghi_chu = (string) $request->input('ghi_chu');
            $NhomCHCTL->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Nhóm câu hỏi - trả lời thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            NhomCHCTL::where('id', $request->nhomcauhoitraloi_id)->delete();
            return redirect()->back()->with('success', 'Xóa Cảnh báo thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
