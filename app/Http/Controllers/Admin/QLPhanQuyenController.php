<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class QLPhanQuyenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
//        #Thêm role va permission
//        $role = Role::create(['name' => 'quanlytinh']);
//        $role = Role::create(['name' => 'quanlyhuyen']);
//        $role = Role::create(['name' => 'quanlyxa']);
//        $role = Role::create(['name' => 'viewer']);
//        $permission = Permission::create(['name' => 'QLphanquyen']);
//        $permission = Permission::create(['name' => 'QLtaikhoan']);
//        $permission = Permission::create(['name' => 'QLcosochannuoi']);
//        $permission = Permission::create(['name' => 'QLdiemdich']);

        $get_All_Role = Role::all();
        $get_All_Permissions = Permission::all();
//        foreach ($get_All_Role as $key => $role){
//            $role->permissions;
//        };
        return view('admin.quanlyphanquyen.index',[
            'title' => 'Quản lý Phân quyền',
            'get_All_Role' => $get_All_Role,
            'get_All_Permissions' => $get_All_Permissions,
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
        //
    }
    public function roleAddPermission(Request $request)
    {
        try {
            $permission_exist =array();
            $get_All_Permissions = Permission::all();
            foreach ($get_All_Permissions as $key2 => $permission){
                if((string) $request->input($permission->name) != null){
                    $permission_exist[] = $permission->name;
                }
            }
            $get_role_name = $request->input('role');
            $role = Role::findByName($get_role_name);
            $role->syncPermissions($permission_exist);
            return redirect()->back()->with('success', 'Thêm phân quyền cho vai trò "'.$get_role_name.'" thành công!');
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
}
