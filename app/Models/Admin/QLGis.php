<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLGis extends Model
{
    use HasFactory;
    protected $fillable = [
        'kinh_do',
        'vi_do',
        'phuong_xa',
        'huyen_tp',
        'tinh',
        'ghi_chu',
    ];
}
