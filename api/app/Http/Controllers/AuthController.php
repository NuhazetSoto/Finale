<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\Sanctum;


class AuthController extends Controller
{
    //
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'nombre' => 'required',
            'apellidos' => 'required',
            'username'=>'required',
            'email' => 'required|email|unique:usuarios',
            'contraseña' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'message'=>'Error en la validacion',
                'errors'=>$validator->errors()
            ],400);
        }

        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->username = $request->username;
        $usuario->email = $request->email;
        $usuario->contraseña = Hash::make($request->contraseña);
        $usuario->save();

        return response()->json([
            "message" => "Registro OK",
            'data'=>$usuario
        ],200); 
    }
    
     public function login(Request $request) {
    $credentials = $request->validate([
        'email' => ['required'],
        'contraseña' => ['required']
    ]);

    $usuario = Usuario::where('email', $credentials['email'])->first();

    if ($usuario && Hash::check($credentials['contraseña'], $usuario->contraseña)) {
        $id = $usuario->id;
        $token = $usuario->createToken('token')->plainTextToken;
        return response(["token"=>$token, "id"=>$id], Response::HTTP_ACCEPTED);
        
    } else {
        return response(Response::HTTP_UNAUTHORIZED);
        
    }
}
    public function logout(Request $request)
{
    $request->usuario()->logout();

    return response('Logged out successfully', Response::HTTP_OK);
}


    
}
