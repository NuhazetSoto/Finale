import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { createProyecto } from "../../../Services/proyecto.services";
import { Link, useNavigate } from "react-router-dom";


export default function NuevoProyecto() {
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [proyecto, setProyecto] = useState(null);


  const navigation = useNavigate();

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(titulo);
  };
  const handleSinopsis = (e) => {
    setSinopsis(e.target.value);
    console.log(sinopsis);
  };
  const handleClick = async () => {
    const proyectoData = await createProyecto({
      titulo: titulo,
      sinopsis: sinopsis,
      usuario_id: localStorage.getItem("id"),
    });
    setProyecto(proyectoData);
    navigation(
      `/usuario/${localStorage.getItem("id")}/misproyectos/${proyectoData.id}`
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          minWidth: "50%",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
        }}
      >
        <Typography sx={{ color: "black" }}>
          Tranquilo, podrás editarlos en cualquier momento ;)
        </Typography>
        <TextField
          id="outlined-required"
          label="Título"
          variant="standard"
          style={{ maxWidth: "60%", marginTop: "5%" }}
          onChange={handleTitulo}
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Sinopsis:"
          multiline
          rows={8}
          variant="standard"
          fullWidth
          onChange={handleSinopsis}
        />
        <Button sx={{ marginTop: "10px" }} onClick={handleClick}>
          Continuar
        </Button>
      </Card>
    </Box>
  );
}
