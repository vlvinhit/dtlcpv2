@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#themQLDonVi">Tạo Đơn vị</button>
    </div>
    <table class="table">
        <div class="mb-3">
            <input type="text" id="searchInput" class="form-control w-25" placeholder="Tìm kiếm đơn vị" style="min-width: 200px;">
        </div>
        <thead>
        <tr>
            <th>#</th>
            <th>Tên Đơn vị</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Phường/xã</th>
            <th>Huyện/TP</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_quanlydonvi as $key => $all_tamp)
                <tr>
                    <td class="text-danger">{{$key + 1}}</td>
                    <td class="text-danger">{{ $all_tamp->ten_don_vi}}</td>
                    <td class="text-danger">{{$all_tamp->so_dien_thoai}}</td>
                    <td class="text-danger">{{$all_tamp->dia_chi}}</td>
                    <td class="text-danger">{{$all_tamp->phuong_xa}}</td>
                    <td class="text-danger">{{$all_tamp->huyen_tp}}</td>
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/editQLDonVi/{{$all_tamp->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/destroyQLDonVi') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="quanlydonvi_id" value="{{$all_tamp->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add  QLDonVi-->
    <div class="modal fade" id="themQLDonVi" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/themQLDonVi') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Tạo Đơn vị</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="quanlydonvi_id" value="">
                        <div class="form-group">
                            <label>Tên Đơn vị</label>
                            <input type="text" class="form-control" name="ten_don_vi" placeholder="Nhập Tên Đơn vị">
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại</label>
                            <input type="text" pattern="[0-9]{10}" class="form-control" name="so_dien_thoai" placeholder="Nhập Số điện thoại (0123456789)">
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="city" name="tinh" >
                                <option value="" selected>Chọn tỉnh thành</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="district" name="huyen_tp">
                                <option value="" selected>Chọn quận huyện</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="ward" name="phuong_xa">
                                <option value="" selected>Chọn phường xã</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Địa chỉ</label>
                            <input type="text" class="form-control" name="dia_chi" placeholder="Nhập Địa chỉ">
                        </div>
                        <div class="form-group">
                            <label>Ghi chú</label>
                            <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Tạo Đơn vị</button>
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
                    <script>
                        var citis = document.getElementById("city");
                        var districts = document.getElementById("district");
                        var wards = document.getElementById("ward");
                        var Parameter = {
                            url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
                            method: "GET",
                            responseType: "application/json",
                        };
                        var promise = axios(Parameter);
                        promise.then(function (result) {
                            renderCity(result.data);
                        });
                        function renderCity(data) {
                            for (const x of data) {
                                // citis.options[citis.options.length] = new Option(x.Name, x.Id);
                                citis.options[citis.options.length] = new Option(x.Name, x.Name);
                            }
                            citis.onchange = function () {
                                district.length = 1;
                                ward.length = 1;
                                if(this.value != ""){
                                    const result = data.filter(n => n.Name === this.value);

                                    for (const k of result[0].Districts) {
                                        district.options[district.options.length] = new Option(k.Name, k.Name);
                                    }
                                }
                            };
                            district.onchange = function () {
                                ward.length = 1;
                                const dataCity = data.filter((n) => n.Name === citis.value);
                                if (this.value != "") {
                                    const dataWards = dataCity[0].Districts.filter(n => n.Name === this.value)[0].Wards;

                                    for (const w of dataWards) {
                                        wards.options[wards.options.length] = new Option(w.Name, w.Name);
                                    }
                                }
                            };
                        }
                    </script>
                </form>
            </div>
        </div>
    </div>
@endsection
