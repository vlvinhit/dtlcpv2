@extends('admin.main')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách kết quả đánh giá rủi ro chăn nuôi</h3>
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
                        <th style="text-align: center;">STT</th>
                        <th style="text-align: center;">Kết quả đánh giá</th>
                        <th style="text-align: center;">Khuyến nghị</th>
                        <th style="text-align: center;">Thời gian</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($results as $result)
                        <tr>
                            <td>{{ $result->id }}</td>
                            <td>
                                Tổng điểm: {{ $result->total_score }}<br>
                                @if ($result->total_score < 30)
                                    An toàn sinh học ở mức kém
                                @elseif ($result->total_score >= 30 && $result->total_score < 40)
                                    An toàn sinh học ở mức trung bình
                                @elseif ($result->total_score >= 40 && $result->total_score < 50)
                                    An toàn sinh học ở mức khá
                                @elseif ($result->total_score >= 50 && $result->total_score < 59)
                                    An toàn sinh học ở mức khá tốt
                                @elseif ($result->total_score >= 59)
                                    An toàn sinh học ở mức tốt
                                @endif
                            </td>
                            <td>
                                <ul>
                                    @foreach (json_decode($result->recommendations, true) as $recommendation)
                                        @if (!empty($recommendation))
                                            <li>{{ $recommendation }}</li>
                                        @endif
                                    @endforeach
                                </ul>
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
            <a href="/admin/antoansinhhoc?quy_mo=Quy%20m%C3%B4%20v%E1%BB%ABa" class="btn btn-primary"><i class="fas fa-redo"></i> Làm lại đánh giá</a>
        </div>
    </div>
@endsection
