<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLKhuyenNghi;
use Illuminate\Http\Request;

class QLKhuyenNghiController extends Controller
{
    public function index()
    {
        $get_all_quanlykhuyennghi = QLKhuyenNghi::orderbyDesc('id')->paginate(20);
        return view('admin.quanlykhuyennghi.index',[
            'title' => 'Quản lý Khuyến nghị',
            'get_all_quanlykhuyennghi' => $get_all_quanlykhuyennghi,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_khuyen_nghi' => 'required',
        ]);
        try {
            QLKhuyenNghi::create([
                'ten_khuyen_nghi' => (string) $request->input('ten_khuyen_nghi'),
                'mo_ta' => (string) $request->input('mo_ta'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Khuyến nghị thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLKhuyenNghi $quanlykhuyennghi)
    {
        #dd($qlDiemDich);
        return view('admin.quanlykhuyennghi.edit',[
            'title' => 'Chỉnh sửa Đánh giá',
            'quanlykhuyennghi' => $quanlykhuyennghi
        ]);
    }
    public function update(Request $request)
    {
        $QLKhuyenNghi = QLKhuyenNghi::where('id', $request->quanlykhuyennghi_id)->first();
        try {
            $QLKhuyenNghi->ten_khuyen_nghi = (string) $request->input('ten_khuyen_nghi');
            $QLKhuyenNghi->mo_ta = (string) $request->input('mo_ta');
            $QLKhuyenNghi->ghi_chu = (string) $request->input('ghi_chu');
            $QLKhuyenNghi->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Khuyến nghị thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            QLKhuyenNghi::where('id', $request->quanlykhuyennghi_id)->delete();
            return redirect()->back()->with('success', 'Xóa Khuyến nghị thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
