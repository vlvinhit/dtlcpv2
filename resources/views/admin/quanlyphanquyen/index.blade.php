@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#">Thêm vai trò</button>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Tên Vai trò</th>
            <th>Phân quyền</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
        @foreach($get_All_Role as $key => $role)
            <tr>
                <td>{{$key}}</td>
                <td>{{$role->name}}</td>
                <td>{{str_replace(['","','[',']','"'],[', ','',''],$role->permissions->pluck('name'))}}</td>
                <td>
                    <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#{{$role->name}}">Chỉnh sửa</button>
                </td>
            </tr>
            <!-- Edit Student Modal (for each student) -->
            <div class="modal fade" id="{{$role->name}}" tabindex="-1" role="dialog"
                 aria-labelledby="{{$role->name}}"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form method="POST" action="{{ url('admin/quanlyphanquyen') }}" id = "{{$role->name}}">
                            @csrf
                            <div class="modal-header">
                                <h5 class="modal-title" id="{{$role->name}}"><i class="fas fa-edit"></i>
                                    Chỉnh sửa {{$role->name}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" name="role" value="{{$role->name}}">
                                <div class="col-sm-6">
                                    <!-- checkbox -->
                                    @foreach($get_All_Permissions as $key2 => $permission)
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input name ="{{$permission->name}}"  class="form-check-input" type="checkbox" checked>
                                                <label class="form-check-label">{{$permission->name}}</label>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i>Tạo tài khoản</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
        </tbody>
    </table>
@endsection
