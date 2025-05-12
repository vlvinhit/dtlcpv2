@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#themQLDiemDich">Tạo tài khoản</button>
    </div>
    <table class="table">
        <div class="mb-3">
            <input type="text" id="searchInput" class="form-control w-25" placeholder="Tìm kiếm tài khoản" style="min-width: 200px;">
        </div>
        <thead>
        <tr>
            <th>#</th>
            <th>Tên User</th>
            <th>Email</th>
            <th>Vai trò (Role)</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
        <p hidden>{!! $tamp_dem = 0 !!}</p>
        @foreach($user as $key => $u)
            <tr>
                <td>{{$key + 1}}</td>
                <td>{{$u->name}}</td>
                <td>{{$u->email}}</td>
                <td>{{$collection_role[$tamp_dem] ?? 'Không lấy được thông tin vai trò!'}}</td>
                <td>
                    <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#edit{{$u->id}}">phân quyền</button>
                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary">Xóa</button>
                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary">Tạm dừng</button>
                </td>
            </tr>
            <p hidden>{!! $tamp_dem++ !!}</p>
            <!-- Edit Student Modal (for each student) -->
            <div class="modal fade" id="edit{{$u->id}}" tabindex="-1" role="dialog"
                 aria-labelledby=""
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form method="POST" action="{{ url('admin/quanlytaikhoan') }}" >
                            @csrf
                            <div class="modal-header">
                                <h5 class="modal-title" id="{{$u->id}}"><i class="fas fa-edit"></i>
                                    Chỉnh sửa {{$u->name}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" name="user_id" value="{{$u->id}}">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Vai trò</label>
                                        <select class="form-control" name="chose_role">
                                            @foreach($get_All_Role as $key2 => $role)
                                                <option value="{{$role->name}}">{{str_replace(['admin','quanlytinh','quanlyhuyen','quanlyxa','viewer']
                                        ,['Administrator', 'Quản lý cấp tỉnh', 'Quản lý cấp TP/Huyện', 'Quản lý cấp phường/xã'],$role->name)}}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i>Chỉnh sửa</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
        </tbody>
    </table>
    <!-- Edit Student Modal (for each student) -->
    <div class="modal fade" id="themQLDiemDich" tabindex="-1" role="dialog"
         aria-labelledby="themQLDiemDich"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ route(name: 'reg_user') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id="themQLDiemDich"><i class="fas fa-edit"></i>
                            Tạo tài khoản</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="id" value="">
                        <div class="form-group">
                            <label>Tên người dùng</label>
                            <input type="text" class="form-control" name="name" placeholder="Nhập họ tên người dùng">
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ email</label>
                            <input type="email" class="form-control" name="email" placeholder="Nhập Địa chỉ email">
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" class="form-control" name="password" placeholder="Nhập password">
                        </div>
                        <div class="form-group">-
                            <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                            <label>Phân quyền</label>
                            <select class="form-control" name="chose_role">
                                @foreach($get_All_Role as $key => $role)
                                    <option value="{{$role->name}}">{{str_replace(['admin','quanlytinh','quanlyhuyen','quanlyxa','viewer']
                                        ,['Administrator', 'Quản lý cấp tỉnh', 'Quản lý cấp TP/Huyện', 'Quản lý cấp phường/xã'],$role->name)}}</option>
                                @endforeach
                            </select>
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
@endsection
