<?php
namespace App\Models\VietMap;

use App\Models\Admin\Quanlytinh\District;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Province extends Model
{
    #use HasFactory;
    protected $fillable = [
        'name',
        'gso_id'
    ];
}
