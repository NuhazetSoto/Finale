<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use Illuminate\Http\Request;

class GeneroController extends Controller
{
    public function index()
    {
        $generos = Genero::all();

        return response()->json($generos);
    }

    public function store(Request $request)
    {
        $genero = Genero::create($request->all());

        return response()->json($genero, 201);
    }

    public function show($id)
    {
        $genero = Genero::find($id);

        if (!$genero) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        return response()->json($genero);
    }

    public function update(Request $request, $id)
    {
        $genero = Genero::find($id);

        if (!$genero) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        $genero->update($request->all());

        return response()->json($genero);
    }

    public function destroy($id)
    {
        $genero = Genero::findOrFail($id);
        if ($genero) {
            $genero->delete();
            return response()->json(['mensaje' => 'Genero eliminado']);
        } else {
            return response()->json(['mensaje' => 'Genero no encontrado'],404);
        }
    }
}
