@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#themQuymoCSCN">Tạo Quy mô</button>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Tên Quy mô</th>
            <th>Điều kiện</th>
            <th>Ghi chú</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_quymocscn as $key => $all_quymocscn)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{$all_quymocscn->ten_quy_mo}}</td>
                    <td>{{$all_quymocscn->dieu_kien}}</td>
                    <td>{{$all_quymocscn->ghi_chu}}</td>
                    <td>
                        <div class="row">
                            <div class="col-2">
                                <button type="submit" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit{{$all_quymocscn->id}}">sửa</button>
                            </div>
                            <div class="col-2">
                                <form method="POST" action="{{ url('admin/destroyQLQuyMoCSCN') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="quymocscn_id" value="{{$all_quymocscn->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
                <!-- Edit  Modal -->
                <div class="modal fade" id="edit{{$all_quymocscn->id}}" tabindex="-1" role="dialog"
                     aria-labelledby=""
                     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form method="POST" action="{{ url('admin/editQLQuyMoCSCN') }}" >
                                @csrf
                                <div class="modal-header">
                                    <h5 class="modal-title" id="{{$all_quymocscn->id}}"><i class="fas fa-edit"></i>
                                        Chỉnh sửa {{$all_quymocscn->ten_quy_mo}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <input type="hidden" name="quymocscn_id" value="{{$all_quymocscn->id}}">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label>Tên Quy mô</label>
                                                <input type="text" class="form-control" name="ten_quy_mo" placeholder="" value="{{$all_quymocscn->ten_quy_mo}}">
                                            </div>
                                            <div class="form-group">
                                                <label>Điều kiện</label>
                                                <input type="text" class="form-control" name="dieu_kien" placeholder="" value="{{$all_quymocscn->dieu_kien}}">
                                            </div>
                                            <div class="form-group">
                                                <label>Ghi chú</label>
                                                <input type="text" class="form-control" name="ghi_chu" placeholder="" value="{{$all_quymocscn->ghi_chu}}">
                                            </div>
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
    <!--  Modal add  QuymoCSCN-->
    <div class="modal fade" id="themQuymoCSCN" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/themQLQuyMoCSCN') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Tạo Quy mô cơ sở chăn nuôi</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="id" value="">
                        <div class="form-group">
                            <label>Tên Quy mô</label>
                            <input type="text" class="form-control" name="ten_quy_mo" placeholder="Nhập Tên Quy mô">
                        </div>
                        <div class="form-group">
                            <label>Điều kiện</label>
                            <input type="text" class="form-control" name="dieu_kien" placeholder="Nhập Điều kiện">
                        </div>
                        <div class="form-group">
                            <label>Ghi chú</label>
                            <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Tạo Quy mô</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
