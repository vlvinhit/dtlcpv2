<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLDiemDichv2;
use App\Models\Admin\QLDiaGioiHanhChinhTG;
use Illuminate\Http\Request;

class QLDiemDichv2Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $get_all_qldiemdichv2 = QLDiemDichv2::orderbyDesc('nam')->paginate(500);
        $get_all_qldiagioihanhchinh = QLDiaGioiHanhChinhTG::orderbyDesc('id')->get();
        return view('admin.quanlydiemdichv2.index',[
            'title' => 'Quản lý Điểm dịch v2',
            'get_all_qldiemdichv2' => $get_all_qldiemdichv2,
            'get_all_qldiagioihanhchinh' => $get_all_qldiagioihanhchinh, // Truyền toàn bộ dữ liệu
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
            'nam' => 'required',
            'SL_diem_dich' => 'required',
            'phuong_xa' => 'required',
            'huyen_tp' => 'required',
            'tinh' => 'required',
        ]);
        #dd($request);
        try {
            QLDiemDichv2::create([
                'nam' => (string) $request->input('nam'),
                'SL_diem_dich' => (string) $request->input('SL_diem_dich'),
                'kinh_do' => (string) $request->input('kinh_do'),
                'vi_do' => (string) $request->input('vi_do'),
                'tinh' => (string) $request->input('tinh'),
                'huyen_tp' => (string) $request->input('huyen_tp'),
                'phuong_xa' => (string) $request->input('phuong_xa'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Điểm dịch thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(QLDiemDichv2 $qldiemdichv2)
    {
        #dd($qlDiemDich);
        return view('admin.quanlydiemdichv2.edit',[
            'title' => 'Chỉnh sửa Điểm dịch',
            'qldiemdichv2' => $qldiemdichv2
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
        $QLDiemDichv2 = QLDiemDichv2::where('id', $request->qldiemdichv2_id)->first();
        try {
            $QLDiemDichv2->nam = (string) $request->input('nam');
            $QLDiemDichv2->SL_diem_dich = (string) $request->input('SL_diem_dich');
            $QLDiemDichv2->kinh_do = (string) $request->input('kinh_do');
            $QLDiemDichv2->vi_do = (string) $request->input('vi_do');
            $QLDiemDichv2->tinh = (string) $request->input('tinh');
            $QLDiemDichv2->huyen_tp = (string) $request->input('huyen_tp');
            $QLDiemDichv2->phuong_xa = (string) $request->input('phuong_xa');
            $QLDiemDichv2->ghi_chu = (string) $request->input('ghi_chu');
            $QLDiemDichv2->save();
            return redirect('admin/quanlydiemdichv2')->with('success', 'Chỉnh sửa Điểm dịch thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
