@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#addQLDiemDichv2">Thêm điểm dịch</button>
        <a href="/admin/bandogis/gis2" class="btn btn-primary" >Bản đồ GIS</a>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Năm</th>
            <th>SL điểm dịch</th>
            <th>Kinh độ</th>
            <th>Vĩ độ</th>
            <th>Phường/xã</th>
            <th>Huyện/TP</th>
            <th>Tỉnh</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_qldiemdichv2 as $key => $qldiemdichv2)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{ $qldiemdichv2->nam}}</td>
                    <td>{{ $qldiemdichv2->SL_diem_dich}}</td>
                    <td>{{$qldiemdichv2->kinh_do}}</td>
                    <td>{{$qldiemdichv2->vi_do}}</td>
                    <td>{{$qldiemdichv2->phuong_xa}}</td>
                    <td>{{$qldiemdichv2->huyen_tp}}</td>
                    <td>{{$qldiemdichv2->tinh}}</td>
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/quanlydiemdichv2/edit/{{$qldiemdichv2->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/destroyQLCoSoChanNuoi') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="cosochannuoi_id" value="{{$qldiemdichv2->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add -->
    <div class="modal fade" id="addQLDiemDichv2" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/quanlydiemdichv2/addQLDiemDichv2') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Thêm điểm dịch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="QLDiemDichv2_id" value="">
                        <div class="form-group">
                            <label>Năm</label>
                            <input type="number" class="form-control" name="nam" placeholder="Nhập năm">
                        </div>
                        <div class="form-group">
                            <label>Số lượng điểm dịch</label>
                            <input type="number" class="form-control" name="SL_diem_dich" placeholder="Nhập số lượng điểm dịch">
                        </div>
                        <div class="form-group">
                            <label>Kinh độ</label>
                            <input type="text" class="form-control" name="kinh_do" placeholder="Nhập Kinh độ">
                        </div>
                        <div class="form-group">
                            <label>Vĩ độ</label>
                            <input type="text" class="form-control" name="vi_do" placeholder="Nhập Vĩ độ">
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
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i>Thêm điểm dịch</button>
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
                    <script>
                        var citis = document.getElementById("city");
                        var districts = document.getElementById("district");
                        var wards = document.getElementById("ward");
                        var ghiChuInput = document.querySelector('input[name="ghi_chu"]');

                        // Dữ liệu từ Laravel Controller (truyền toàn bộ)
                        var diaGioiHanhChinh = @json($get_all_qldiagioihanhchinh);

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
                                citis.options[citis.options.length] = new Option(x.Name, x.Name);
                            }

                            // Thiết lập giá trị mặc định cho tỉnh/thành phố
                            citis.value = "Tỉnh Tiền Giang";
                            citis.onchange = function () {
                                districts.length = 1;
                                wards.length = 1;
                                if (this.value != "") {
                                    const result = data.filter(n => n.Name === this.value);

                                    for (const k of result[0].Districts) {
                                        districts.options[districts.options.length] = new Option(k.Name, k.Name);
                                    }
                                }
                            };

                            // Kích hoạt sự kiện onchange để cập nhật các quận/huyện của tỉnh mặc định
                            citis.onchange();

                            districts.onchange = function () {
                                wards.length = 1;
                                const dataCity = data.filter((n) => n.Name === citis.value);
                                if (this.value != "") {
                                    const dataWards = dataCity[0].Districts.filter(n => n.Name === this.value)[0].Wards;

                                    for (const w of dataWards) {
                                        wards.options[wards.options.length] = new Option(w.Name, w.Name);
                                    }
                                }
                            };

                            // Thêm sự kiện onchange cho ward để so sánh dữ liệu
                            wards.onchange = function () {
                                const selectedWard = wards.value;
                                const selectedDistrict = districts.value;

                                // So sánh với dữ liệu diaGioiHanhChinh
                                const matchedItem = diaGioiHanhChinh.find(item =>
                                    item.phuong_xa === selectedWard && item.huyen_tp === selectedDistrict
                                );

                                // Nếu khớp, điền giá trị ma_gis vào ghi chú
                                if (matchedItem) {
                                    ghiChuInput.value = matchedItem.ma_gis;
                                } else {
                                    ghiChuInput.value = ""; // Xóa nếu không tìm thấy
                                }
                            };
                        }
                    </script>

                </form>
            </div>
        </div>
    </div>
@endsection
