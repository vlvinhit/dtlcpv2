@extends('admin.main')
@section('content')
    <form action="{{ url('admin/quanlydiemdichv2/editqldiemdichv2') }}" method="POST">
        <div class="card-body">
            <input type="hidden" name="qldiemdichv2_id" value="{{$qldiemdichv2->id}}">
            <div class="form-group">
                <label>Năm</label>
                <input type="text" class="form-control" name="nam" placeholder="" value="{{$qldiemdichv2->nam}}">
            </div>
            <div class="form-group">
                <label>Số lượng điểm dịch</label>
                <input type="number" class="form-control" name="SL_diem_dich" placeholder="" value="{{$qldiemdichv2->SL_diem_dich}}">
            </div>
            <div class="form-group">
                <label>Kinh độ</label>
                <input type="text" class="form-control" name="kinh_do" placeholder="" value="{{$qldiemdichv2->kinh_do}}">
            </div>
            <div class="form-group">
                <label>Vĩ độ</label>
                <input type="text" class="form-control" name="vi_do" placeholder="" value="{{$qldiemdichv2->vi_do}}">
            </div>
            <div class="form-group">
                <select class="form-control" id="city" name="tinh" >
                    <option value="{{$qldiemdichv2->tinh}}" selected>{{$qldiemdichv2->tinh}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="district" name="huyen_tp">
                    <option value="{{$qldiemdichv2->huyen_tp}}" selected>{{$qldiemdichv2->huyen_tp}}</option>
                </select>
            </div>
            <div class="form-group">
                <select class="form-control" id="ward" name="phuong_xa">
                    <option value="{{$qldiemdichv2->phuong_xa}}" selected>{{$qldiemdichv2->phuong_xa}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" placeholder="" value="{{$qldiemdichv2->ghi_chu}}">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Điểm dịch</button>
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
