@extends('admin.main')
@section('content')
    <div class="form-group">
        <label>Vinh</label>
        <div class="row">
            <select class="province" style="width: 30%;">
                @foreach($data_province_all_name as $province)
                    <option value="{{$province->slug}}">{{$province->title}}</option>
                @endforeach
            </select>
            <select class="district" style="width: 30%;">
                @foreach($data_district_all_name as $district)
                    <option value="{{$district->slug}}">{{$district->title}}</option>
                @endforeach
            </select>
            <select class="form-control select3" style="width: 30%;">
                <option selected="selected">Alabama</option>
                <option>Phuong</option>
            </select>
        </div>
    </div>
@endsection
