<?php

namespace App\Http\Services\QLDiemDich;
use App\Models\Menu;
use App\Models\QLDiemDich;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class QLDiemDichService
{
    public function create($request)
    {
        try {
            QLDiemDich::create([
                'kinh_do' => (float) $request->input('kinh_do'),
                'vi_do' => (float) $request->input('vi_do'),
                'tinh' => (string) $request->input('tinh'),
                'huyen_tp' => (string) $request->input('huyen_tp'),
                'phuong_xa' => (string) $request->input('phuong_xa'),
                'dia_chi' => (string) $request->input('dia_chi'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
                'id_co_so_chan_nuoi' => (int) $request->input('id_co_so_chan_nuoi'),

            ]);
            Session::flash('success', 'Tạo điểm dịch thành công');
        } catch (\Exception $err) {
            Session::flash('error', $err->getMessage());
            return false;
        }
        return true;
    }
    public function getAll()
    {
        return QLDiemDich::orderbyDesc('id')->paginate(20);
    }
    public function destroy($request)
    {
        $id = (int) $request->input('id');
        $tamp = QLDiemDich::where('id', $id)->first();
        if ($tamp) {
            #return QLDiemDich::where('id', $id)->orWhere('parent_id', $id)->delete();
            return QLDiemDich::where('id', $id)->delete();
        }
        return false;
    }
    public function update($request, $qlDiemDich) : bool
    {
        try {
            $qlDiemDich->kinh_do = (float) $request->input('kinh_do');
            $qlDiemDich->vi_do = (float) $request->input('vi_do');
            $qlDiemDich->tinh = (string) $request->input('tinh');
            $qlDiemDich->huyen_tp = (string) $request->input('huyen_tp');
            $qlDiemDich->phuong_xa = (string) $request->input('phuong_xa');
            $qlDiemDich->dia_chi = (string) $request->input('dia_chi');
            $qlDiemDich->ghi_chu = (string) $request->input('ghi_chu');
            $qlDiemDich->id_co_so_chan_nuoi = (int) $request->input('id_co_so_chan_nuoi');
            $qlDiemDich->save();
            Session::flash('success', 'Cập nhật điểm dịch thành công');
        } catch (\Exception $err) {
            Session::flash('error', $err->getMessage());
            return false;
        }
        return true;
    }
}
