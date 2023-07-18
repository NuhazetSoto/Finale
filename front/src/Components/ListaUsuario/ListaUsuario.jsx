import React, { useEffect, useState } from "react";
import {
  allProyectos,
  allProyectosUsuario,
} from "../../Services/proyecto.services";
import { Button, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Proyecto from "../Proyecto/Proyecto";
import ProyectoEdit from "../Proyecto/ProyectoEdit/ProyectoEdit";
import Header from "../Header/Header";

function ListaUsuario() {
  const { usuario_id } = useParams();
  const [proyectos, setProyectos] = useState([]);

  const handleProyectos = async () => {
    console.log(usuario_id);
    const result = await allProyectosUsuario(usuario_id);
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
          <ProyectoEdit e={e} id={e.id} />
        </Grid>
      );
    });
  };

  return (
    <>
    <Header/>
      <Grid sx={{display: 'flex', flexDirection:'column'}}container spacing={2}>
        {mapProyectos()}
        <Link to={`/usuario/${usuario_id}/misproyectos/nuevo`}>
          <Button>Nuevo Proyecto</Button>
        </Link>
      </Grid>
    </>
  );
}

export default ListaUsuario;
