<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends User
{
    use HasFactory,HasApiTokens;
     protected $fillable = [
        'nombre',
        'apellidos',
        'username',
        'email',
        'contraseña'
    ];
    public function createPersonalToken($name, $abilities = ['*'])
    {
        return $this->createToken($name, $abilities);
    }

}
