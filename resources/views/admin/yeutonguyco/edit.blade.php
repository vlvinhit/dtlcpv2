@extends('admin.main')
@section('content')
    <form action="{{ url('admin/editYTNguyCo') }}" method="POST">
        <div class="card-body">
            <input type="hidden" name="yeutonguyco_id" value="{{$yeutonguyco->id}}">
            <div class="form-group">
                <label>Tên Yếu tố nguy cơ</label>
                <input type="text" class="form-control" name="ten_YTNC" placeholder="" value="{{$yeutonguyco->ten_YTNC}}">
            </div>
            <div class="form-group">
                <label>Mô tả</label>
                <input type="text"  class="form-control" name="mo_ta" placeholder="" value="{{$yeutonguyco->mo_ta}}">
            </div>
            <div class="form-group">
                <label>Khuyến nghị</label>
                <input type="text" class="form-control" name="khuyen_nghi" value="{{$yeutonguyco->khuyen_nghi}}" >
            </div>
            <div class="form-group">
                <label>Tỉ trọng</label>
                <input type="text" class="form-control" name="ti_trong" value="{{$yeutonguyco->ti_trong}}" >
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Yếu tố nguy cơ</button>
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
