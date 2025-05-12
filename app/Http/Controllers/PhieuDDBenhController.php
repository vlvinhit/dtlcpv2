<?php

namespace App\Http\Controllers;
use App\Models\PhieuDDBenh;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PhieuDDBenhController extends Controller
{
    public function index()
    {
        $get_all_PhieuDDBenh = PhieuDDBenh::orderbyDesc('id')->get();
        $get_username = Auth::user()->username;
        return view('phieududoanbenh.index',[
            'title' => 'Phiếu dự đoán bệnh',
            'get_all_PhieuDDBenh' => $get_all_PhieuDDBenh,
            'username' => $get_username,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'nhiet_do' => 'required',
            'loai_heo' => 'required',
            'da' => 'required',
            'suc_song' => 'required',
            'than_kinh' => 'required',
            'bo_an' => 'required',
            'chaynuoc_mat_mui' => 'required',
            'ho_hap' => 'required',
            'tieu_hoa' => 'required',
            'ho' => 'required',
            'chet_dotngot' => 'required',
        ]);
        #dd($request);

        try {
            $nhiet_do = (integer) $request->input('nhiet_do');
            $loai_heo = (integer) $request->input('loai_heo');
            $da = (integer) $request->input('da');
            $suc_song = (integer) $request->input('suc_song');
            $than_kinh = (integer) $request->input('than_kinh');
            $bo_an = (integer) $request->input('bo_an');
            $chaynuoc_mat_mui = (integer) $request->input('chaynuoc_mat_mui');
            $ho_hap = (integer) $request->input('ho_hap');
            $tieu_hoa = (integer) $request->input('tieu_hoa');
            $ho = (integer) $request->input('ho');
            $chet_dotngot = (integer) $request->input('chet_dotngot');
            $Tongdiem = (($nhiet_do+$loai_heo+$da+$suc_song+$than_kinh+$bo_an+$chaynuoc_mat_mui+$ho_hap+$tieu_hoa+$ho+$chet_dotngot)*0.91/10);
            PhieuDDBenh::create([
                'thong_tin' => (string) $request->input('thong_tin'),
                'user_name' => (string) $request->input('user_name'),
                'nhiet_do' => (integer) $request->input('nhiet_do'),
                'loai_heo' => (integer) $request->input('loai_heo'),
                'da' => (integer) $request->input('da'),
                'suc_song' => (integer) $request->input('suc_song'),
                'than_kinh' => (integer) $request->input('than_kinh'),
                'bo_an' => (integer) $request->input('bo_an'),
                'chaynuoc_mat_mui' => (integer) $request->input('chaynuoc_mat_mui'),
                'ho_hap' => (integer) $request->input('suc_song'),
                'tieu_hoa' => (integer) $request->input('than_kinh'),
                'ho' => (integer) $request->input('bo_an'),
                'chet_dotngot' => (integer) $request->input('chaynuoc_mat_mui'),
                'ket_qua' => (integer) $Tongdiem,
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Phiếu dự đoán thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
