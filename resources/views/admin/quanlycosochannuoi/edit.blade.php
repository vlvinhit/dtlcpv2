@extends('admin.main')
@section('content')
    <form action="{{ url('admin/editQLCoSoChanNuoi') }}" method="POST">
        <div class="card-body">
            <input type="hidden" name="cosochannuoi_id" value="{{$qlcosochannuoi->id}}">
            <div class="form-group">
                <label>Tên Chủ cơ sở </label>
                <input type="text" class="form-control" name="ten_chu_cs" placeholder="" value="{{$qlcosochannuoi->ten_chu_cs}}">
            </div>
            <div class="form-group">
                <label>Số điện thoại</label>
                <input type="text" pattern="[0-9]{10}" class="form-control" name="so_dien_thoai" placeholder="" value="{{$qlcosochannuoi->so_dien_thoai}}">
            </div>
            <div class="form-group" >
                <label>Zalo</label>
                <input type="text" class="form-control" name="zalo" placeholder="" value="{{$qlcosochannuoi->zalo}}">
            </div>
            @if($qlcosochannuoi->trang_thai_dich =='1')
                <div class="form-group">
                    <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" id="radio1" value="1" name="trang_thai_dich" checked="">
                        <label for="radio1" class="custom-control-label">Xảy ra dịch</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input class="custom-control-input" type="radio" id="radio2" value="0" name="trang_thai_dich">
                        <label for="radio2" class="custom-control-label">Không xảy ra dịch</label>
                    </div>
                </div>
            @else
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
            @endif
            <div class="form-group">
                <label>Kinh độ</label>
                <input type="number" class="form-control" name="kinh_do"  step="0.000001" placeholder="" value="{{$qlcosochannuoi->kinh_do}}">
            </div>
            <div class="form-group">
                <label>Vĩ độ</label>
                <input type="number" class="form-control" name="vi_do" step="0.000001" placeholder="" value="{{$qlcosochannuoi->vi_do}}">
            </div>
            <div class="form-group">
                <select class="form-control" id="city" name="tinh" >
                    <option value="{{$qlcosochannuoi->tinh}}" selected>{{$qlcosochannuoi->tinh}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="district" name="huyen_tp">
                    <option value="{{$qlcosochannuoi->huyen_tp}}" selected>{{$qlcosochannuoi->huyen_tp}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="ward" name="phuong_xa">
                    <option value="{{$qlcosochannuoi->phuong_xa}}" selected>{{$qlcosochannuoi->phuong_xa}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Địa chỉ</label>
                <input type="text" class="form-control" name="dia_chi" value="{{$qlcosochannuoi->dia_chi}}" placeholder="Nhập Địa chỉ">
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Cơ sở chăn nuôi</button>
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
                //renderCity2(result.data);
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
                            districts.options[district.options.length] = new Option(k.Name, k.Name);
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
        @csrf
    </form>
@endsection
