<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\YTNguyCo;
use Illuminate\Http\Request;

class YTNguyCoController extends Controller
{
    public function index()
    {
        $get_all_yeutonguyco = YTNguyCo::orderbyDesc('id')->paginate(20);
        return view('admin.yeutonguyco.index',[
            'title' => 'Quản lý Yếu tố nguy cơ',
            'get_all_yeutonguyco' => $get_all_yeutonguyco,
        ]);
    }
    public function store(Request $request)
    {
        #dd($request);
        $request->validate([
            'ten_YTNC' => 'required',
        ]);
        try {
            YTNguyCo::create([
                'ten_YTNC' => (string) $request->input('ten_YTNC'),
                'mo_ta' => (string) $request->input('mo_ta'),
                'khuyen_nghi' => (string) $request->input('khuyen_nghi'),
                'ti_trong' => (integer) $request->input('ti_trong'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Yếu tố nguy cơ thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function show(YTNguyCo $yeutonguyco)
    {
        #dd($qlDiemDich);
        return view('admin.yeutonguyco.edit',[
            'title' => 'Chỉnh sửa Yếu tố nguy cơ',
            'yeutonguyco' => $yeutonguyco
        ]);
    }
    public function update(Request $request)
    {
        $YTNguyCo = YTNguyCo::where('id', $request->yeutonguyco_id)->first();
        try {
            $YTNguyCo->ten_YTNC = (string) $request->input('ten_YTNC');
            $YTNguyCo->mo_ta = (string) $request->input('mo_ta');
            $YTNguyCo->khuyen_nghi = (string) $request->input('khuyen_nghi');
            $YTNguyCo->ti_trong = (string) $request->input('ti_trong');
            $YTNguyCo->ghi_chu = (string) $request->input('ghi_chu');
            $YTNguyCo->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Yếu tố nguy cơ thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
    public function destroy(Request $request)
    {
        try {
            YTNguyCo::where('id', $request->yeutonguyco_id)->delete();
            return redirect()->back()->with('success', 'Xóa Yếu tố nguy cơ thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
