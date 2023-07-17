<?php

namespace App\Http\Controllers;

use App\Models\Favorito;
use Illuminate\Http\Request;

class FavoritoController extends Controller
{
    public function index()
    {
        $favoritos = Favorito::all();
        return response()->json($favoritos);
    }

    public function store(Request $request)
    {
        $favorito = Favorito::create($request->all());
        return response()->json($favorito, 201);
    }

    public function show($id)
    {
        $favorito = Favorito::findOrFail($id);
        return response()->json($favorito);
    }

    public function update(Request $request, $id)
    {
        $favorito = Favorito::findOrFail($id);
        $favorito->update($request->all());
        return response()->json($favorito);
    }

    public function destroy($id)
    {
        $favorito = Favorito::findOrFail($id);
        if ($favorito) {
            $favorito->delete();
            return response()->json(['mensaje' => 'Favorito eliminado']);
        } else {
            return response()->json(['mensaje' => 'Favorito no encontrado'],404);
        }
    }
}

