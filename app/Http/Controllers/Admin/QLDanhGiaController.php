<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLDanhGia;
use Illuminate\Http\Request;

class QLDanhGiaController extends Controller
{
    public function index()
    {
        $get_all_quanlydanhgia = QLDanhGia::orderbyDesc('id')->paginate(20);
        return view('admin.quanlydanhgia.index',[
            'title' => 'Quản lý Đánh giá',
            'get_all_quanlydanhgia' => $get_all_quanlydanhgia,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_danh_gia' => 'required',
        ]);
        try {
            QLDanhGia::create([
                'ten_danh_gia' => (string) $request->input('ten_danh_gia'),
                'mo_ta' => (string) $request->input('mo_ta'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Đánh giá thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLDanhGia $quanlydanhgia)
    {
        #dd($qlDiemDich);
        return view('admin.quanlydanhgia.edit',[
            'title' => 'Chỉnh sửa Đánh giá',
            'quanlydanhgia' => $quanlydanhgia
        ]);
    }
    public function update(Request $request)
    {
        $QLDanhGia = QLDanhGia::where('id', $request->quanlydanhgia_id)->first();
        try {
            $QLDanhGia->ten_danh_gia = (string) $request->input('ten_danh_gia');
            $QLDanhGia->mo_ta = (string) $request->input('mo_ta');
            $QLDanhGia->ghi_chu = (string) $request->input('ghi_chu');
            $QLDanhGia->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Đánh giá thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            QLDanhGia::where('id', $request->quanlydanhgia_id)->delete();
            return redirect()->back()->with('success', 'Xóa Đánh giá thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
