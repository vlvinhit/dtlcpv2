<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\QLDiemDich\QLDiemDichService;
use App\Http\Requests\QLDiemDich\CreateFormRequest;
use App\Models\QLDiemDich;
use Illuminate\Http\Request;

class QLDiemDichController extends Controller
{
    protected $qlDiemDichService;
    public function __construct(QLDiemDichService $qlDiemDichService)
    {
        $this->qlDiemDichService = $qlDiemDichService;
    }
    public function store(CreateFormRequest $request)
    {
        #dd($request->input());
        $result = $this->qlDiemDichService->create($request);
        return redirect()->back();
    }
    public function storeoflist(CreateFormRequest $request)
    {
        #dd($request->input());
        $result = $this->qlDiemDichService->create($request);
        return redirect('/admin/quanlydiemdich/list');
    }
    public function create()
    {
        return view('admin.quanlydiemdich.add', [
            'title'=>'Thêm điểm dịch',
            #'menus'=> $this->qlDiemDichService->getParent(),
        ]);
    }
    public function index(QLDiemDich $qlDiemDich)
    {
        return view('admin.quanlydiemdich.list',[
            'title' => 'Danh sách điểm dịch',
            #'qlDiemDich' => $qlDiemDich,
            'qldiemdichs' => $this->qlDiemDichService->getAll()
        ]);
    }
    public function destroy(Request $request)
    {
        $result = $this->qlDiemDichService->destroy($request);
        if ($result){
            return response()->json([
                'error' => false,
                'message' => 'Xóa thành công điểm dịch!'
            ]);
        }
        return response()->json([
            'error' => true,
        ]);
    }
    public function show(QLDiemDich $qlDiemDich)
    {
        #dd($qlDiemDich);
        return view('admin.quanlydiemdich.edit',[
            'title' => 'Chỉnh sửa điểm dịch',
            'qlDiemDich' => $qlDiemDich
            #'qldiemdichs' => $this->qlDiemDichService->getAll()
        ]);
    }
    public function update(QLDiemDich $qlDiemDich, CreateFormRequest $request)
    {
        $this->qlDiemDichService->update($request, $qlDiemDich);
        return redirect('/admin/quanlydiemdich/list');
    }
}
