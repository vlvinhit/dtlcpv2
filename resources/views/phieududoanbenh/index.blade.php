@extends('admin.main')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $title ?? 'Đánh giá sức khỏe heo' }}</h3>
        </div>
        <div class="card-body">
            <!-- Nút dẫn đến lịch sử đánh giá -->
            <div class="col-md-3">
                <a class="btn btn-primary" href="{{ route('health-assessment.results') }}">Lịch sử đánh giá</a>
            </div>

            @if ($assessments->isNotEmpty())
                <form method="POST" action="{{ route('health-assessment.submit') }}">
                    @csrf
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Chỉ tiêu</th>
                            <th>Mức đánh giá</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($assessments as $index => $assessment)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ $assessment->chi_tieu }}</td>
                                <td>
                                    @foreach ($assessmentOptions[$assessment->chi_tieu] as $option)
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
                    Không có chỉ tiêu để đánh giá.
                </div>
            @endif
        </div>
    </div>
@endsection
