<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLDiaGioiHanhChinhTG;
use App\Models\Admin\QLDiemDichv2;
use App\Models\Admin\QLGis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class QLGisController extends Controller
{
    //
    public function index()
    {
        $get_all_toado_phuongxa = QLGis::orderbyDesc('id')->paginate(20);
        return view('admin.quanlygis.index',[
            'title' => 'Quản lý Tọa độ phường/xã',
            'get_all_toado_phuongxa' => $get_all_toado_phuongxa,
        ]);
    }
    public function index1()
    {
        $get_all_qldiemdichv2 = QLDiemDichv2::orderbyDesc('id')->get();
        return view('admin.bandogis.gis',[
            'title' => 'Trang Bản đồ Thông tin địa lý',
            'get_all_qldiemdichv2' => $get_all_qldiemdichv2,
        ]);
    }
    public function index2()
    {
        $get_all_qldiemdichv2 = QLDiemDichv2::orderbyDesc('id')->get();
        $get_all_qldiagioihanhchinh = QLDiaGioiHanhChinhTG::orderbyDesc('id')->get();
        $get_nam_all = collect($get_all_qldiemdichv2)
            ->groupBy('ghi_chu') // Nhóm theo 'ghi_chu'
            ->map(function ($items, $key) {
                return [
                    'ghi_chu' => $key,
                    'SL_diem_dich' => $items->sum('SL_diem_dich'), // Cộng dồn 'SL_diem_dich'
                ];
            })
            ->values() // Reset key thành số nguyên liên tiếp
            ->toArray(); // Chuyển thành mảng
        return view('admin.bandogis.gis2',[
            'title' => 'Trang Bản đồ Thông tin địa lý',
            'get_all_qldiemdichv2' => $get_all_qldiemdichv2,
            'get_all_qldiagioihanhchinh' => $get_all_qldiagioihanhchinh,
            'get_nam_all' => $get_nam_all,
        ]);
    }
    public function index3()
    {
        $get_all_diemdichv2 = QLDiemDichv2::orderbyDesc('nam')->paginate();
        return view('admin.bandogis.gis3',[
            'title' => 'Trang Bản đồ Thông tin địa lý',
            'get_all_diemdichv2' => $get_all_diemdichv2,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'kinh_do' => 'required',
            'vi_do' => 'required',
            'tinh' => 'required',
            'huyen_tp' => 'required',
            'phuong_xa' => 'required',
        ]);
        #dd($request);
        try {
            QLGis::create([
                'kinh_do' => (float) $request->input('kinh_do'),
                'vi_do' => (float) $request->input('vi_do'),
                'tinh' => (string) $request->input('tinh'),
                'huyen_tp' => (string) $request->input('huyen_tp'),
                'phuong_xa' => (string) $request->input('phuong_xa'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Tọa độ phường/xã thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLGis $qlgis)
    {
        #dd($QLGis);
        return view('admin.quanlygis.edit',[
            'title' => 'Chỉnh sửa Tọa độ phường/xã',
            'qlgis' => $qlgis
        ]);
    }
    public function update(Request $request)
    {
        #dd($request);
        $QLGis = QLGis::where('id', $request->quanlygis_id)->first();
        try {
            $QLGis->kinh_do = (string) $request->input('kinh_do');
            $QLGis->vi_do = (string) $request->input('vi_do');
            $QLGis->tinh = (string) $request->input('tinh');
            $QLGis->huyen_tp = (string) $request->input('huyen_tp');
            $QLGis->phuong_xa = (string) $request->input('phuong_xa');
            $QLGis->ghi_chu = (string) $request->input('ghi_chu');
            $QLGis->save();
            return redirect('/admin/quanlygis')->with('success', 'Chỉnh sửa Tọa độ phường/xã thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
