@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#addPhieuDDBenh">Tạo Phiếu dự đoán</button>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Thông tin người thực hiện dự đoán</th>
            <th>Thời gian thực hiện</th>
            <th>Kết quả</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_PhieuDDBenh as $key => $PhieuDDBenh)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{$PhieuDDBenh->thong_tin}}</td>
                    <td>{{$PhieuDDBenh->created_at}}</td>
                    <td>Tổng điểm: {{$PhieuDDBenh->ket_qua}}</td>
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/quanlydiemdichv2/edit/{{$PhieuDDBenh->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/destroyQLCoSoChanNuoi') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="cosochannuoi_id" value="{{$PhieuDDBenh->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add -->
    <div class="modal fade" id="addPhieuDDBenh" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/phieududoanbenh/addphieududoanbenh') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Tạo phiếu dự đoán</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="PhieuDDBenh_id" value="">
                        <div class="form-group">
                            <label>Thông tin người thực hiện dự đoán</label>
                            <input type="text" class="form-control" name="thong_tin" placeholder="Nhập Thông tin">
                        </div>
                        <div class="form-group">
                            <label>username</label>
                            <input type="text" class="form-control" name="user_name" value="{{ Auth::user()->email }}" placeholder="">
                        </div>
                        <div class="form-group">
                            <label>Nhiệt độ</label>
                            <input type="text" class="form-control" name="nhiet_do" placeholder="37 - 38,5 độ 0 điểm, 39 - 40 độ 3 điểm, > 40 độ 7 điểm">
                        </div>
                        <div class="form-group">
                            <label>Loại heo</label>
                            <input type="text" class="form-control" name="loai_heo" placeholder="4 - 10 tuần 3 điểm, > 10 tuần 3 điểm, nái 4 điểm">
                        </div>
                        <div class="form-group">
                            <label>Màu Da</label>
                            <input type="text" class="form-control" name="da" placeholder="Bình thường 0 điểm, đỏ tím 8 điểm, xanh tím 2 điểm">
                        </div>
                        <div class="form-group">
                            <label>Sức sống</label>
                            <input type="text" class="form-control" name="suc_song" placeholder="Bình thường 0 điểm, giảm linh hoạt 7 điểm, không hoạt động 3 điểm">
                        </div>
                        <div class="form-group">
                            <label>Thần kinh</label>
                            <input type="text" class="form-control" name="than_kinh" placeholder="Bình thường 0 điểm, loạng choạng 8 điểm, liệt cơ 2 điểm">
                        </div>
                        <div class="form-group">
                            <label>Bỏ ăn</label>
                            <input type="text" class="form-control" name="bo_an" placeholder="Không 0 điểm, < 50% tổng đàn 5 điểm, > 50% tổng đàn 5 điểm">
                        </div>
                        <div class="form-group">
                            <label>Chảy nước mắt, mũi</label>
                            <input type="text" class="form-control" name="chaynuoc_mat_mui" placeholder="Bình thường 0 điểm, ít 4 điểm, nhiều 6 điểm">
                        </div>
                        <div class="form-group">
                            <label>Hô hấp</label>
                            <input type="text" class="form-control" name="ho_hap" placeholder="Bình thường 0 điểm, thở khó 2 điểm, thở bụng 8 điểm">
                        </div>
                        <div class="form-group">
                            <label>Tiêu hóa</label>
                            <input type="text" class="form-control" name="tieu_hoa" placeholder="Bình thường 0 điểm, tiêu chảy 4 điểm, tiêu chảy, ói 6 điểm">
                        </div>
                        <div class="form-group">
                            <label>Ho</label>
                            <input type="text" class="form-control" name="ho" placeholder="Không ho 0 điểm, ho ít 4 điểm, ho nhiều 6 điểm">
                        </div>
                        <div class="form-group">
                            <label>Chết đột ngột</label>
                            <input type="text" class="form-control" name="chet_dotngot" placeholder="Không có 0 điểm, < 50% tổng đàn 4 điểm, > 50% tổng đàn 6 điểm">
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
                        }
                    </script>

                </form>
            </div>
        </div>
    </div>
@endsection
