@extends('admin.main')
@section('content')
    <form action="{{ url('admin/quanlygis/editqlgis') }}" method="POST">
        <div class="card-body">
            <input type="hidden" name="quanlygis_id" value="{{$qlgis->id}}">
            <div class="form-group">
                <label>Kinh độ</label>
                <input type="text" class="form-control" name="kinh_do"   placeholder="" value="{{$qlgis->kinh_do}}">
            </div>
            <div class="form-group">
                <label>Vĩ độ</label>
                <input type="number" class="form-control" name="vi_do"  placeholder="" value="{{$qlgis->vi_do}}">
            </div>
            <div class="form-group">
                <select class="form-control" id="city" name="tinh" >
                    <option value="{{$qlgis->tinh}}" selected>{{$qlgis->tinh}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="district" name="huyen_tp">
                    <option value="{{$qlgis->huyen_tp}}" selected>{{$qlgis->huyen_tp}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="ward" name="phuong_xa">
                    <option value="{{$qlgis->phuong_xa}}" selected>{{$qlgis->phuong_xa}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Địa chỉ</label>
                <input type="text" class="form-control" name="dia_chi" value="{{$qlgis->dia_chi}}" placeholder="Nhập Địa chỉ">
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Tọa độ phường/xã</button>
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
