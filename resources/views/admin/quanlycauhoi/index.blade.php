@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#addQLCauHoi">Tạo Câu hỏi</button>
    </div>
    <table class="table">
        <div class="mb-3">
            <input type="text" id="searchInput" class="form-control w-25" placeholder="Tìm kiếm Câu hỏi" style="min-width: 200px;">
        </div>
        <thead>
        <tr>
            <th>#</th>
            <th>Loại Câu hỏi</th>
            <th>Câu hỏi</th>
            <th>Câu trả lời</th>
            <th>Đáp án</th>
            <th>Ghi chú</th>
            <th>Quản lý</th>
        </tr>
        </thead>
        <tbody>
            @foreach($get_all_quanlycauhoi as $key => $all_tamp)
                <tr>
                    <td>{{$key + 1}}</td>
                    <td>{{ $all_tamp->loai_cau_hoi}}</td>
                    <td>{{ $all_tamp->cau_hoi}}</td>
                    <td>{{$all_tamp->cau_tra_loi}}</td>
                    <td>{{$all_tamp->dap_an}}</td>
                    <td>{{$all_tamp->ghi_chu}}</td>
                    <td>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="btn btn-primary btn-sm" href="/admin/editQLCauHoi/{{$all_tamp->id}}">
                                    <i class="fas fa-edit"></i>
                                </a>
                            </div>
                            <div class="col-md-3">
                                <form method="POST" action="{{ url('admin/destroyQLCauHoi') }}">
                                    @csrf
                                    <button onclick="return confirm('Bạn thực sự muốn xóa!');" class="btn btn-primary btn-sm">Xóa</button>
                                    <input type="hidden" name="quanlycauhoi_id" value="{{$all_tamp->id}}">
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <!--  Modal add  QLDonVi-->
    <div class="modal fade" id="addQLCauHoi" tabindex="-1" role="dialog"
         aria-labelledby=""
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="POST" action="{{ url('admin/addQLCauHoi') }}">
                    @csrf
                    <div class="modal-header">
                        <h5 class="modal-title" id=""><i class="fas fa-edit"></i>
                            Tạo Câu hỏi</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="quanlycauhoi_id" value="">
                        <div class="form-group">
                            <label>Loại Câu hỏi</label>
                            <select name="loai_cau_hoi" class="form-control">
                                <option value="Câu hỏi tự luận" selected>Câu hỏi tự luận</option>
                                <option value="Câu hỏi trắc nghiệm (04 chọn 01)">Câu hỏi trắc nghiệm (04 chọn 01)</option>
                                <option value="Câu hỏi trắc nghiệm chọn nhiều đáp án">Câu hỏi trắc nghiệm chọn nhiều đáp án</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Câu hỏi</label>
                            <input type="text" class="form-control" name="cau_hoi" placeholder="Nhập Câu hỏi">
                        </div>
                        <div class="form-group">
                            <label>Câu trả lời</label>
                            <input type="text" class="form-control" name="cau_tra_loi" placeholder="Nhập Câu trả lời">
                        </div>
                        <div class="form-group">
                            <label>Đáp án</label>
                            <input type="text" class="form-control" name="dap_an" placeholder="Nhập Đáp án">
                        </div>
                        <div class="form-group">
                            <label>Ghi chú</label>
                            <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Tạo Câu hỏi</button>
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
