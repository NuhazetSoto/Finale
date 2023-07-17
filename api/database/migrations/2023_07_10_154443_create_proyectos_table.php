<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProyectosTable extends Migration
{
    public function up(): void
    {
        Schema::create('proyectos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('sinopsis');
            $table->string('portada');
            $table->string('contenido');
            $table->unsignedBigInteger('usuario_id');
            $table->unsignedBigInteger('genero_id');
            $table->timestamps();

            $table->foreign('usuario_id')->references('id')->on('usuarios')->onDelete('cascade');
            $table->foreign('genero_id')->references('id')->on('generos')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('proyectos');
    }
}