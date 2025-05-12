@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#addQLGis">Thêm Tọa độ phường/xã</button>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Kinh độ</th>
            <th>Vĩ độ</th>
            <th>Phường/xã</th>
            <th>Huyện/TP</th>
            <th>Tỉnh</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_toado_phuongxa as $key => $toado_phuongxa)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{ $toado_phuongxa->kinh_do}}</td>
                    <td>{{$toado_phuongxa->vi_do}}</td>
                    <td>{{$toado_phuongxa->phuong_xa}}</td>
                    <td>{{$toado_phuongxa->huyen_tp}}</td>
                    <td>{{$toado_phuongxa->tinh}}</td>
                    <td>{{$toado_phuongxa->ghi_chu}}</td>
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/quanlygis/edit/{{$toado_phuongxa->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/quanlygis/destroyQLGis') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="cosochannuoi_id" value="{{$toado_phuongxa->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add  QLGis-->
    <div class="modal fade" id="addQLGis" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/quanlygis/addqlgis') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Thêm Tọa độ phường/xã</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="QLGis_id" value="">
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
                            <label>Ghi chú</label>
                            <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i>Thêm Tọa độ phường/xã</button>
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
