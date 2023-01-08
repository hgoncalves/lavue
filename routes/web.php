<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\v1\Auth\LoginController;

Route::get('/{vue_capture?}', function () {
    return view('app');
})->where('vue_capture', '[\/\w\.-]*');


// Admin Auth
// ----------------------------------------------

Route::post('login', [LoginController::class, 'login']);

Route::post('auth/logout', function () {
    Auth::guard('web')->logout();
});
