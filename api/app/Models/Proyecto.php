<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'sinopsis',
        'portada',
        'contenido',
        
        
    ];
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
    public function genero()
    {
        return $this->belongsTo(Genero::class);
    }
}
