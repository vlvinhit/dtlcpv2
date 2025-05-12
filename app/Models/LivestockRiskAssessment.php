<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LivestockRiskAssessment extends Model
{
    protected $fillable = ['QuyMoChanNuoi', 'CacYeuToNguyCo', 'NoiDungTraLoi', 'Diem', 'KhuyenNghi'];
}
