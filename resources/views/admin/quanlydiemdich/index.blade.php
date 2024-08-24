@extends('admin.main')

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th style="width: 50px">ID</th>
            <th>Địa chỉ</th>
            <th>Phường/xã</th>
            <th>Huyện/TP</th>
            <th>Tỉnh</th>
            <th>Cập nhật lúc</th>
            <th style="width: 100px">&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {!! \App\Helpers\Helper::qldiemdich($qldiemdichs) !!}
        </tbody>
    </table>
@endsection

<!-- Edit Student Modal (for each student) -->
<div class="modal fade" id="editStudentModal" tabindex="-1" role="dialog" aria-labelledby="editStudentModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="POST" action=" ">
                @csrf
                <div class="modal-header">
                    <h5 class="modal-title" id="editStudentModalLabel"><i class="fas fa-edit"></i>
                        Edit Student</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="id" value=" ">
                    <div class="form-group">
                        <label for="name"><i class="fas fa-user"></i> Name</label>
                        <input type="text" name="name" value=" " class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Email</label>
                        <input type="email" name="email" value=" " class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="address"><i class="fas fa-address-card"></i> Address</label>
                        <input type="text" name="address" value=" " class="form-control" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
