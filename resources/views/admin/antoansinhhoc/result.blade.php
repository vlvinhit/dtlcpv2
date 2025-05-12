<!DOCTYPE html>
<html>
<head>
    <title>Danh sách kết quả đánh giá</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h2>Danh sách kết quả đánh giá rủi ro chăn nuôi</h2>

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if ($results->isNotEmpty())
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Tổng điểm</th>
                <th>Khuyến nghị</th>
                <th>Thời gian</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($results as $result)
                <tr>
                    <td>{{ $result->id }}</td>
                    <td>{{ $result->total_score }}</td>
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
        <p>Chưa có kết quả nào được lưu.</p>
    @endif

    <a href="{{ route('assessment.index') }}" class="btn btn-primary">Làm lại đánh giá</a>
</div>
</body>
</html>
