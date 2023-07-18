import React, { useEffect, useState } from "react";
import { allProyectos } from "../../Services/proyecto.services";
import { Button, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Proyecto from "../../Components/Proyecto/Proyecto";


function TodosProyectos() {
  const [proyectos, setProyectos] = useState([]);

  const handleProyectos = async () => {
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
        <>
       
          <Grid item key={e.id} xs={12} lg={6}>
            
            <Proyecto e={e} id={e.id} />
          </Grid>
        </>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {mapProyectos()}
    </Grid>
  );
}

export default TodosProyectos;
