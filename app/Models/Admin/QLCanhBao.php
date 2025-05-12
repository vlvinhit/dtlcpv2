<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QLCanhBao extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_canh_bao',
        'mo_ta',
        'ghi_chu',
    ];
}
