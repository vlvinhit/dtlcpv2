@extends('admin.main')
@section('content')
    <form action="" method="POST">
        <div class="card-body">
            <div class="form-group">
                <label>Kinh độ</label>
                <input type="f" class="form-control" name="kinh_do" value="{{$qlDiemDich->kinh_do}}" step="0.000001" placeholder="Nhập kinh độ">
            </div>
            <div class="form-group">
                <label>Vĩ độ</label>
                <input type="number" class="form-control" name="vi_do" value="{{$qlDiemDich->vi_do}}" step="0.000001" placeholder="Nhập Vĩ độ">
            </div>
            <div class="form-group">
                <select class="form-control" id="city" name="tinh" >
                    <option value="{{$qlDiemDich->tinh}}" selected>{{$qlDiemDich->tinh}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="district" name="huyen_tp">
                    <option value="{{$qlDiemDich->huyen_tp}}" selected>{{$qlDiemDich->huyen_tp}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="ward" name="phuong_xa">
                    <option value="{{$qlDiemDich->phuong_xa}}" selected>{{$qlDiemDich->phuong_xa}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Địa chỉ</label>
                <input type="text" class="form-control" name="dia_chi" value="{{$qlDiemDich->dia_chi}}" placeholder="Nhập Địa chỉ">
            </div>
            <div class="form-group">
                <label>Mã Cơ sở Chăn nuôi</label>
                <input type="number" class="form-control" name="id_co_so_chan_nuoi" value="{{$qlDiemDich->id_co_so_chan_nuoi}}" placeholder="Nhập Mã Cơ sở Chăn nuôi">
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" value="{{$qlDiemDich->ghi_chu}}" placeholder="Nhập Ghi chú">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Điểm dich</button>
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
