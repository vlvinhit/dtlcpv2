<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\Admin\QuanLytinh\QuanLytinhController;
use App\Http\Controllers\Admin\quanlyhuyen\quanlyhuyenController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\QLDiemDichController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/admin/users/login', [LoginController::class, 'index'])->name('login');
Route::post('/admin/users/login/store', [LoginController::class, 'store']);
Route::middleware(['auth'])->group(function (){
    Route::prefix('admin')->group(function (){
        Route::get('/', [MainController::class, 'index']);
        Route::get('main', [MainController::class, 'index'])->name('admin');
        Route::get('quanlytinh', [QuanLytinhController::class, 'index']);
        Route::get('quanlyhuyen', [quanlyhuyenController::class, 'index']);
        #Menus
        Route::prefix('menus')->group(function (){
            Route::get('add',[MenuController::class, 'create']);
            Route::post('add',[MenuController::class, 'store']);
            Route::get('list',[MenuController::class, 'index']);
            Route::delete('destroy',[MenuController::class, 'destroy']);
        });
        #QLDiemDich
        Route::prefix('quanlydiemdich')->group(function (){
            Route::get('add',[QLDiemDichController::class, 'create']);
            Route::post('add',[QLDiemDichController::class, 'store']);
            Route::get('list',[QLDiemDichController::class, 'index']);
            Route::post('list',[QLDiemDichController::class, 'store']);
            Route::delete('destroy',[QLDiemDichController::class, 'destroy']);
            Route::get('edit/{qlDiemDich}',[QLDiemDichController::class, 'show']);
            Route::post('edit/{qlDiemDich}',[QLDiemDichController::class, 'update']);
        });
    });

});
