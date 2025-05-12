<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\QLQuyMoCSCN;
use App\Models\QLDiemDich;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class QLQuyMoCSCNController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $get_all_quymocscn = QLQuyMoCSCN::orderbyDesc('id')->paginate(20);
        return view('admin.quanlyquymocscn.index',[
            'title' => 'Quản lý Quy mô cơ sở chăn nuôi',
            'get_all_quymocscn' => $get_all_quymocscn,
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
        $request->validate([
            'ten_quy_mo' => 'required',
        ]);
        //dd($request);
        try {
            QLQuyMoCSCN::create([
                'ten_quy_mo' => (string) $request->input('ten_quy_mo'),
                'dieu_kien' => (string) $request->input('dieu_kien'),
                'ghi_chu' => (string) $request->input('ghi_chu'),
            ]);
            return redirect()->back()->with('success', 'Thêm Quy mô thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        #dd($request);
        $QLQuyMoCSCN = QLQuyMoCSCN::where('id', $request->quymocscn_id)->first();
        try {
            $QLQuyMoCSCN->ten_quy_mo = (string) $request->input('ten_quy_mo');
            $QLQuyMoCSCN->dieu_kien = (string) $request->input('dieu_kien');
            $QLQuyMoCSCN->ghi_chu = (string) $request->input('ghi_chu');
            $QLQuyMoCSCN->save();
            return redirect()->back()->with('success', 'Chỉnh sửa Quy mô thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        #dd($request);
        try {
            QLQuyMoCSCN::where('id', $request->quymocscn_id)->delete();
            return redirect()->back()->with('success', 'Xóa Quy mô thành công!');
        }catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
    }
}
