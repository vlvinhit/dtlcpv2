@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#addQLCoSoChanNuoi">Tạo Cơ sở chăn nuôi</button>
    </div>
    <table class="table">
        <div class="mb-3">
            <input type="text" id="searchInput" class="form-control w-25" placeholder="Tìm kiếm cơ sở chăn nuôi" style="min-width: 200px;">
        </div>
        <thead>
        <tr>
            <th>#</th>
            <th>Tên Chủ cơ sở</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Phường/xã</th>
            <th>Huyện/TP</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_cosochannuoi as $key => $all_cosochannuoi)
                <tr>
                    @if($all_cosochannuoi->trang_thai_dich =='1')
                        <td class="text-danger">{{$key + 1}}</td>
                        <td class="text-danger">{{ $all_cosochannuoi->ten_chu_cs}}</td>
                        <td class="text-danger">{{$all_cosochannuoi->so_dien_thoai}}</td>
                        <td class="text-danger">{{$all_cosochannuoi->dia_chi}}</td>
                        <td class="text-danger">{{$all_cosochannuoi->phuong_xa}}</td>
                        <td class="text-danger">{{$all_cosochannuoi->huyen_tp}}</td>
                    @else
                        <td>{{$key + 1}}</td>
                        <td>{{ $all_cosochannuoi->ten_chu_cs}}</td>
                        <td>{{$all_cosochannuoi->so_dien_thoai}}</td>
                        <td>{{$all_cosochannuoi->dia_chi}}</td>
                        <td>{{$all_cosochannuoi->phuong_xa}}</td>
                        <td>{{$all_cosochannuoi->huyen_tp}}</td>
                    @endif
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/quanlycosochannuoi/edit/{{$all_cosochannuoi->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/destroyQLCoSoChanNuoi') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="cosochannuoi_id" value="{{$all_cosochannuoi->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add  QuymoCSCN-->
    <div class="modal fade" id="addQLCoSoChanNuoi" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/addQLCoSoChanNuoi') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Tạo Cơ sở chăn nuôi</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="CoSoChanNuoi_id" value="">
                        <div class="form-group">
                            <label>Tên Chủ cơ sở</label>
                            <input type="text" class="form-control" name="ten_chu_cs" placeholder="Nhập Tên Chủ cơ sở">
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại</label>
                            <input type="text" pattern="[0-9]{10}" class="form-control" name="so_dien_thoai" placeholder="Nhập Số điện thoại (0123456789)">
                        </div>
                        <div class="form-group" >
                            <label>Zalo</label>
                            <input type="text" class="form-control" name="zalo" placeholder="Nhập Zalo">
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" id="radio1" value="1" name="trang_thai_dich">
                                <label for="radio1" class="custom-control-label">Xảy ra dịch</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" id="radio2" value="0" name="trang_thai_dich" checked="">
                                <label for="radio2" class="custom-control-label">Không xảy ra dịch</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Kinh độ</label>
                            <input type="number" class="form-control" name="kinh_do"  step="0.000001" placeholder="Nhập kinh độ">
                        </div>
                        <div class="form-group">
                            <label>Vĩ độ</label>
                            <input type="number" class="form-control" name="vi_do" step="0.000001" placeholder="Nhập Vĩ độ">
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
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Tạo CS chăn nuôi</button>
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
