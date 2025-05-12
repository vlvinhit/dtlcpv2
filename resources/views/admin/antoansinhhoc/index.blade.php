@extends('admin.main')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $title ?? 'Đánh giá rủi ro chăn nuôi' }}</h3>
        </div>
        <div class="card-body">
            <!-- Hiển thị các nút lọc theo QuyMoChanNuoi -->
            <div class="col-md-3">
                <a class="btn btn-primary" href="/admin/antoansinhhoc/results">Lịch sử đánh giá</a>
            </div>
            <div class="mb-3">
                <label class="form-label">Chọn Quy mô chăn nuôi:</label>
                <div class="btn-group" role="group">
                    @foreach ($quyMoChanNuoiList as $quyMo)
                        <a href="{{ route('assessment.index', ['quy_mo' => $quyMo]) }}" class="btn {{ request('quy_mo') == $quyMo ? 'btn-primary' : 'btn-secondary' }}">{{ $quyMo }}</a>
                    @endforeach
                </div>
            </div>

            @if ($questions->isNotEmpty())
                <form method="POST" action="{{ route('assessment.submit') }}">
                    @csrf
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Yếu tố nguy cơ</th>
                            <th>Lựa chọn</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($questions as $index => $question)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ $question->CacYeuToNguyCo }}</td>
                                <td>
                                    @foreach ($questionOptions[$question->CacYeuToNguyCo] as $option)
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="answers[{{ $index }}]" value="{{ $option }}" required>
                                            <label class="form-check-label">{{ $option }}</label>
                                        </div>
                                    @endforeach
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Hoàn tất</button>
                    </div>
                </form>
            @else
                <div class="alert alert-warning" role="alert">
                    Không có câu hỏi để hiển thị.
                </div>
            @endif
        </div>
    </div>
@endsection
