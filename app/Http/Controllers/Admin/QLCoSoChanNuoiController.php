<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLCoSoChanNuoi;
use App\Models\Admin\QLQuyMoCSCN;
use Illuminate\Http\Request;

class QLCoSoChanNuoiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $get_all_cosochannuoi = QLCoSoChanNuoi::orderbyDesc('id')->paginate(20);
        return view('admin.quanlycosochannuoi.index',[
            'title' => 'Quản lý Cơ sở chăn nuôi',
            'get_all_cosochannuoi' => $get_all_cosochannuoi,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_chu_cs' => 'required',
        ]);
        try {
            QLCoSoChanNuoi::create([
                'ten_chu_cs' => (string) $request->input('ten_chu_cs'),
                'so_dien_thoai' => (string) $request->input('so_dien_thoai'),
                'zalo' => (string) $request->input('zalo'),
                'trang_thai_dich' => (integer) $request->input('trang_thai_dich'),
                'kinh_do' => (float) $request->input('kinh_do'),
                'vi_do' => (float) $request->input('vi_do'),
                'dia_chi' => (string) $request->input('dia_chi'),
                'tinh' => (string) $request->input('tinh'),
                'huyen_tp' => (string) $request->input('huyen_tp'),
                'phuong_xa' => (string) $request->input('phuong_xa'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Cơ sở chăn nuôi thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(QLCoSoChanNuoi $qlcosochannuoi)
    {
        #dd($qlDiemDich);
        return view('admin.quanlycosochannuoi.edit',[
            'title' => 'Chỉnh sửa Cơ sở chăn nuôi',
            'qlcosochannuoi' => $qlcosochannuoi
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $QLCoSoChanNuoi = QLCoSoChanNuoi::where('id', $request->cosochannuoi_id)->first();
        try {
            $QLCoSoChanNuoi->ten_chu_cs = (string) $request->input('ten_chu_cs');
            $QLCoSoChanNuoi->so_dien_thoai = (string) $request->input('so_dien_thoai');
            $QLCoSoChanNuoi->zalo = (string) $request->input('zalo');
            $QLCoSoChanNuoi->trang_thai_dich = (string) $request->input('trang_thai_dich');
            $QLCoSoChanNuoi->kinh_do = (string) $request->input('kinh_do');
            $QLCoSoChanNuoi->vi_do = (string) $request->input('vi_do');
            $QLCoSoChanNuoi->dia_chi = (string) $request->input('dia_chi');
            $QLCoSoChanNuoi->tinh = (string) $request->input('tinh');
            $QLCoSoChanNuoi->huyen_tp = (string) $request->input('huyen_tp');
            $QLCoSoChanNuoi->phuong_xa = (string) $request->input('phuong_xa');
            $QLCoSoChanNuoi->ghi_chu = (string) $request->input('ghi_chu');
            $QLCoSoChanNuoi->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Cơ sở chăn nuôi thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        try {
            QLCoSoChanNuoi::where('id', $request->cosochannuoi_id)->delete();
            return redirect()->back()->with('success', 'Xóa Cơ sở chăn nuôi thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
