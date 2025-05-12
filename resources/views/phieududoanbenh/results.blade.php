@extends('admin.main')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $title ?? 'Lịch sử đánh giá sức khỏe heo' }}</h3>
        </div>
        <div class="card-body">
            @if (session('success'))
                <div class="alert alert-success" role="alert">
                    {{ session('success') }}
                </div>
            @endif

            @if ($results->isNotEmpty())
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Đánh giá</th>
                        <th>Thời gian</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($results as $index => $result)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>
                                @php
                                    $danhGia = $result->total_score >= 10 ? 'Heo có khả năng mắc bệnh Dịch tả lợn Châu Phi (DTLCP)' : ($result->total_score >= 1 ? 'Heo có khả năng mắc bệnh khác' : 'Heo khỏe mạnh, không có dấu hiệu mắc bệnh');
                                    $badgeClass = $result->total_score >= 10 ? 'bg-danger' : ($result->total_score >= 1 ? 'bg-warning' : 'bg-success');
                                @endphp
                                <span class="badge {{ $badgeClass }}" style="font-size: 1.1rem;">Tổng điểm: {{ $result->total_score }} - {{ $danhGia }}</span>
                            </td>
                            <td>{{ $result->created_at->format('d/m/Y H:i:s') }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @else
                <div class="alert alert-warning" role="alert">
                    Chưa có kết quả nào được lưu.
                </div>
            @endif
        </div>
        <div class="card-footer">
            <a href="{{ route('health-assessment.index') }}" class="btn btn-primary"><i class="fas fa-sync"></i> Làm lại đánh giá</a>
        </div>
    </div>
@endsection
