<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    //
     public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }
     public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->username = $request->username;
        $usuario->email = $request->email;
        $usuario->contraseña = $request->contraseña;
        $usuario->save();

        return response()->json($usuario, 201);
    }
     public function show($id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }
    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($request->$id);
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->username = $request->username;
        $usuario->email = $request->email;
        $usuario->contraseña = $request->contraseña;
        $usuario->save();

        return response()->json($usuario);
    }
    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        if ($usuario) {
            $usuario->delete();
            return response()->json(['mensaje' => 'Usuario eliminado']);
        } else {
            return response()->json(['mensaje' => 'Usuario no encontrado'],404);
        }
    }
}
        