<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLCanhBao;
use Illuminate\Http\Request;

class QLCanhBaoController extends Controller
{
    public function index()
    {
        $get_all_quanlycanhbao = QLCanhBao::orderbyDesc('id')->paginate(20);
        return view('admin.quanlycanhbao.index',[
            'title' => 'Quản lý Cảnh báo',
            'get_all_quanlycanhbao' => $get_all_quanlycanhbao,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_canh_bao' => 'required',
        ]);
        try {
            QLCanhBao::create([
                'ten_canh_bao' => (string) $request->input('ten_canh_bao'),
                'mo_ta' => (string) $request->input('mo_ta'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Cảnh báo thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(QLCanhBao $quanlycanhbao)
    {
        #dd($qlDiemDich);
        return view('admin.quanlycanhbao.edit',[
            'title' => 'Chỉnh sửa Cảnh báo',
            'quanlycanhbao' => $quanlycanhbao
        ]);
    }
    public function update(Request $request)
    {
        $QLCanhBao= QLCanhBao::where('id', $request->quanlycanhbao_id)->first();
        try {
            $QLCanhBao->ten_canh_bao = (string) $request->input('ten_canh_bao');
            $QLCanhBao->mo_ta = (string) $request->input('mo_ta');
            $QLCanhBao->ghi_chu = (string) $request->input('ghi_chu');
            $QLCanhBao->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Cảnh báo thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            QLCanhBao::where('id', $request->quanlycanhbao_id)->delete();
            return redirect()->back()->with('success', 'Xóa Cảnh báo thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
