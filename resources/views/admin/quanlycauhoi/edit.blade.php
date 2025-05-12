@extends('admin.main')
@section('content')
    <form action="{{ url('admin/editQLCauHoi') }}" method="POST">
        <div class="card-body">
            <input type="hidden" name="quanlycauhoi_id" value="{{$quanlycauhoi->id}}">
            <div class="form-group">
                <label>Loại Câu hỏi</label>
                <select name="loai_cau_hoi" class="form-control">
                    <option value="essay">Câu hỏi tự luận</option>
                    <option value="multiple_choice">Câu hỏi trắc nghiệm (04 chọn 01)</option>
                </select>
            </div>
            <div class="form-group">
                <label>Câu hỏi</label>
                <input type="text" class="form-control" name="cau_hoi" placeholder="" value="{{$quanlycauhoi->cau_hoi}}">
            </div>
            <div class="form-group">
                <label>Câu trả lời</label>
                <input type="text"  class="form-control" name="cau_tra_loi" placeholder="" value="{{$quanlycauhoi->cau_tra_loi}}">
            </div>
            <div class="form-group">
                <label>Đáp án</label>
                <input type="text"  class="form-control" name="dap_an" placeholder="" value="{{$quanlycauhoi->dap_an}}">
            </div>
            <div class="form-group">
                <label>Ghi chú</label>
                <input type="text" class="form-control" name="ghi_chu" placeholder="Nhập Ghi chú">
            </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
            <button type="submit" class="btn btn-primary">Cập nhật Câu hỏi</button>
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
