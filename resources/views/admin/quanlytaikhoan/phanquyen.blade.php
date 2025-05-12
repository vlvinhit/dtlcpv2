@extends('admin.main')
@section('content')
    <div class="card-footer">
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#themQLDiemDich">Tạo tài khoản</button>
    </div>
    <form method="POST" action="{{ route('roleAddPermission') }}">
        <div class="form-group">
            <div class="form-check">
                <input name ="{{$permission->name}}" value="{{$permission->name}}" class="form-check-input" type="checkbox" checked="">
                <label class="form-check-label">{{$permission->name}}</label>
            </div>
        </div>
    </form>
@endsection
