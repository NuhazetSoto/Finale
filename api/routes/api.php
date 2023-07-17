<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CapituloController;
use App\Http\Controllers\FavoritoController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\ProyectoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::controller(UsuarioController::class)->group(function () {
    Route::get('/usuarios', 'index');
    Route::post('/usuario', 'store');
    Route::get('/usuario/{id}', 'show');
    Route::put('/usuario/{id}', 'update');
    Route::delete('/usuario/{id}', 'destroy');
});
Route::controller(ProyectoController::class)->group(function () {
    Route::get('/proyectos', 'index');
    Route::get('/usuario/{id}/proyectos', 'index2');
    Route::post('/proyecto', 'store');
    Route::get('/proyecto/{id}', 'show');
    Route::put('/proyecto/{id}', 'update');
    Route::delete('/proyecto/{id}', 'destroy');
});
Route::controller(CapituloController::class)->group(function () {
    Route::get('/capitulos', 'index');
    Route::post('/capitulo', 'store');
    Route::get('/capitulo/{id}', 'show');
    Route::put('/capitulo/{id}', 'update');
    Route::delete('/capitulo/{id}', 'destroy');
});
Route::controller(GeneroController::class)->group(function () {
    Route::get('/generos', 'index');
    Route::post('/genero', 'store');
    Route::get('/genero/{id}', 'show');
    Route::put('/genero/{id}', 'update');
    Route::delete('/genero/{id}', 'destroy');
});
Route::controller(FavoritoController::class)->group(function () {
    Route::get('/favoritos', 'index');
    Route::post('/favorito', 'store');
    Route::get('/favorito/{id}', 'show');
    Route::put('/favorito/{id}', 'update');
    Route::delete('/favorito/{id}', 'destroy');
});

