<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YTNguyCo extends Model
{
    use HasFactory;
    protected $fillable = [
        'ten_YTNC',
        'mo_ta',
        'khuyen_nghi',
        'ti_trong',
        'ghi_chu',
    ];
}
