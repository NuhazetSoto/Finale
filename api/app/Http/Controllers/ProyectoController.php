<?php

namespace App\Http\Controllers;

use App\Models\Proyecto;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProyectoController extends Controller
{
      public function index()
    {
        $proyectos = Proyecto::all();
        return response()->json($proyectos);
    }
    public function index2($usuario_id)
{
    $usuario = Usuario::findOrFail($usuario_id); 
    $proyectos = Proyecto::where('usuario_id', $usuario->id)->get();
    
    return response()->json($proyectos);
}

    public function store(Request $request)
    {
        $proyecto =  new Proyecto();
        
        $proyecto->titulo = $request->titulo;
        $proyecto->sinopsis = $request->sinopsis;
        $proyecto->portada = $request->portada;
        $proyecto->contenido = $request->contenido;
        $proyecto->usuario_id = $request->usuario_id;
        
        $proyecto->save();


        return response()->json($proyecto, 201);
    }

    public function show($id)
    {
        $proyecto = Proyecto::findOrFail($id);
        return response()->json($proyecto);
    }

    public function update(Request $request, $id)
    {
        $proyecto = Proyecto::findOrFail($id);
        $proyecto->titulo = $request->titulo;
        $proyecto->sinopsis = $request->sinopsis;
        $proyecto->portada = $request->portada;
        $proyecto->contenido = $request->contenido;
        
        
        $proyecto->save();
        return response()->json($proyecto);
    }

    public function destroy($id)
    {
        $proyecto = Proyecto::findOrFail($id);
        if ($proyecto) {
            $proyecto->delete();
            return response()->json(['mensaje' => 'Proyecto eliminado']);
        } else {            return response()->json(['mensaje' => 'Proyecto no encontrado'],404);
        }
    }
}
