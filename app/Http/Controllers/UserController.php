<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::orderBy('id','DESC')->get();
        $collection_role = array();
        foreach($user as $u){
            // get the names of the user's roles
            $collection_role[] =str_replace(['["admin"]', '["quanlytinh"]', '["quanlyhuyen"]', '["quanlyxa"]', '["viewer"]'],
                ['Administrator', 'Quản lý cấp tỉnh', 'Quản lý cấp TP/Huyện', 'Quản lý cấp phường/xã'],$u->getRoleNames());
        }
        $get_All_Role = Role::all();
        return view('admin.quanlytaikhoan.index',[
            'title' => 'Quản lý Tài khoản',
            'user' => $user,
            'get_All_Role' => $get_All_Role,
            'collection_role' => $collection_role,
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
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        //dd($request);
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }
        try{
            $userId = User::where('email', $request->email)->first();
            $chose_role = $request->chose_role;
            $userId->syncRoles([$chose_role]);
            return redirect()->back()->with('success', 'Thêm tài khoản thành công!');
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function phanquyen($id)
    {
        $user = User::find($id);
        return view('admin.quanlytaikhoan.phanquyen',[
            'title' => 'Quản lý Phân quyen',
            'user' => $user,
        ]);
    }
    public function editphanquyen(Request $request)
    {
        try{
            $userId = User::where('id', $request->user_id)->first();
            $chose_role = $request->chose_role;
            $userId->syncRoles([$chose_role]);
            return redirect()->back()->with('success', 'Chỉnh sửa thành công!');
        } catch (\Exception $err) {
            return redirect()->back()->with('error', $err->getMessage());
        }

    }
}
