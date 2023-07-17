<?php

namespace App\Http\Controllers;

use App\Models\Capitulo;
use Illuminate\Http\Request;

class CapituloController extends Controller
{
    public function index()
    {
        $capitulos = Capitulo::all();
        return response()->json($capitulos);
    }

    public function store(Request $request)
    {
        $capitulo = Capitulo::create($request->all());
        return response()->json($capitulo, 201);
    }

    public function show($id)
    {
        $capitulo = Capitulo::findOrFail($id);
        return response()->json($capitulo);
    }

    public function update(Request $request, $id)
    {
        $capitulo = Capitulo::findOrFail($id);
        $capitulo->update($request->all());
        return response()->json($capitulo);
    }

    public function destroy($id)
    {
        $capitulo = Capitulo::findOrFail($id);
        if ($capitulo) {
            $capitulo->delete();
            return response()->json(['mensaje' => 'Capitulo eliminado']);
        } else {
            return response()->json(['mensaje' => 'Capitulo no encontrado'],404);
        }
    }
}
