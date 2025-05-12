<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLDonVi;
use Illuminate\Http\Request;

class QLDonViController extends Controller
{
    public function index()
    {
        $get_all_quanlydonvi = QLDonVi::orderbyDesc('id')->paginate(20);
        return view('admin.quanlydonvi.index',[
            'title' => 'Quản lý Đơn vị',
            'get_all_quanlydonvi' => $get_all_quanlydonvi,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_don_vi' => 'required',
        ]);
        try {
            QLDonVi::create([
                'ten_don_vi' => (string) $request->input('ten_don_vi'),
                'so_dien_thoai' => (string) $request->input('so_dien_thoai'),
                'dia_chi' => (string) $request->input('dia_chi'),
                'tinh' => (string) $request->input('tinh'),
                'huyen_tp' => (string) $request->input('huyen_tp'),
                'phuong_xa' => (string) $request->input('phuong_xa'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Đơn vị thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLDonVi $quanlydonvi)
    {
        #dd($qlDiemDich);
        return view('admin.quanlydonvi.edit',[
            'title' => 'Chỉnh sửa Cơ sở chăn nuôi',
            'quanlydonvi' => $quanlydonvi
        ]);
    }
    public function update(Request $request)
    {
        $QLDonVi = QLDonVi::where('id', $request->quanlydonvi_id)->first();
        try {
            $QLDonVi->ten_don_vi = (string) $request->input('ten_don_vi');
            $QLDonVi->so_dien_thoai = (string) $request->input('so_dien_thoai');
            $QLDonVi->dia_chi = (string) $request->input('dia_chi');
            $QLDonVi->tinh = (string) $request->input('tinh');
            $QLDonVi->huyen_tp = (string) $request->input('huyen_tp');
            $QLDonVi->phuong_xa = (string) $request->input('phuong_xa');
            $QLDonVi->ghi_chu = (string) $request->input('ghi_chu');
            $QLDonVi->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Đơn vị thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            QLDonVi::where('id', $request->quanlydonvi_id)->delete();
            return redirect()->back()->with('success', 'Xóa Đơn vị thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
