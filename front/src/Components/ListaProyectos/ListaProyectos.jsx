import React, { useEffect, useState } from "react";
import {
  allProyectos,
  allProyectosUsuario,
} from "../../Services/proyecto.services";
import { Button, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Proyecto from "../Proyecto/Proyecto";

function ListaProyectos() {
  const { usuario_id } = useParams();
  const [proyectos, setProyectos] = useState([]);

  const handleProyectos = async () => {
    console.log(usuario_id);
    const result = await allProyectos();
    console.log(result);
    setProyectos(result);
  };

  useEffect(() => {
    handleProyectos();
  }, []);

  const mapProyectos = () => {
    return proyectos.map((e) => {
      return (
        <Grid item key={e.id} xs={12} lg={6}>
          {e.id}
          <Proyecto e={e} id={e.id} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {mapProyectos()}
      <Link to={`/usuario/${usuario_id}/misproyectos/nuevo`}>
        <Button>Nuevo Proyecto</Button>
      </Link>
    </Grid>
  );
}

export default ListaProyectos;
