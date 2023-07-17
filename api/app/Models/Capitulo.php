<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Capitulo extends Model
{
    use HasFactory;
    use HasFactory;
    protected $fillable = [
        'titulo',
        'cabecera',
        'contenido',
        
    ];
   public function proyceto()
    {
        return $this->belongsTo(Proyecto::class);
    }
}
