<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLCauHoi;
use Illuminate\Http\Request;

class QLCauHoiController extends Controller
{
    public function index()
    {
        $get_all_quanlycauhoi = QLCauHoi::orderbyDesc('id')->paginate(20);
        return view('admin.quanlycauhoi.index',[
            'title' => 'Quản lý Câu hỏi',
            'get_all_quanlycauhoi' => $get_all_quanlycauhoi,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'loai_cau_hoi' => 'required',
            'cau_hoi' => 'required',
        ]);
        try {
            QLCauHoi::create([
                'loai_cau_hoi' => (string) $request->input('loai_cau_hoi'),
                'cau_hoi' => (string) $request->input('cau_hoi'),
                'cau_tra_loi' => (string) $request->input('cau_tra_loi'),
                'dap_an' => (string) $request->input('dap_an'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Câu hỏi thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLCauHoi $quanlycauhoi)
    {
        #dd($qlDiemDich);
        return view('admin.quanlycauhoi.edit',[
            'title' => 'Chỉnh sửa Câu hỏi',
            'quanlycauhoi' => $quanlycauhoi
        ]);
    }
    public function update(Request $request)
    {
        $QLCauHoi= QLCauHoi::where('id', $request->quanlycauhoi_id)->first();
        try {
            $QLCauHoi->loai_cau_hoi = (string) $request->input('loai_cau_hoi');
            $QLCauHoi->cau_hoi = (string) $request->input('cau_hoi');
            $QLCauHoi->cau_tra_loi = (string) $request->input('cau_tra_loi');
            $QLCauHoi->dap_an = (string) $request->input('dap_an');
            $QLCauHoi->ghi_chu = (string) $request->input('ghi_chu');
            $QLCauHoi->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Câu hỏi thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            QLCauHoi::where('id', $request->quanlycauhoi_id)->delete();
            return redirect()->back()->with('success', 'Xóa Câu hỏi thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
