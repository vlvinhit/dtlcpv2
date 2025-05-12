<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLDiaGioiHanhChinhTG extends Model
{
    use HasFactory;
    protected $fillable = [
        'ma_gis',
        'phuong_xa',
        'huyen_tp',
        'ghi_chu',
    ];
}
