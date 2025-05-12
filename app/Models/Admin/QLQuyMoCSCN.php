<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLQuyMoCSCN extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_quy_mo',
        'dieu_kien',
        'ghi_chu',
    ];
}
