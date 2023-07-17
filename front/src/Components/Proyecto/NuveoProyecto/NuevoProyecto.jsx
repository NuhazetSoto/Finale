import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createProyecto } from "../../../Services/proyecto.services";
import { Link, useNavigate } from "react-router-dom";


export default function NuevoProyecto() {
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [proyecto, setProyecto] = useState(null)

  const navigation = useNavigate()

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(titulo);
  };
  const handleSinopsis = (e) => {
    setSinopsis(e.target.value);
    console.log(sinopsis);
  };
  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    // handle the file upload logic here
    // You can access the uploaded file using 'file' variable
  };
  const handleClick = async () => {

    const proyectoData = await createProyecto({
      titulo: titulo,
      sinopsis: sinopsis,
      usuario_id: localStorage.getItem("id"),
    });
     setProyecto(proyectoData);
    navigation(`/usuario/${localStorage.getItem('id')}/misproyectos/${proyectoData.id}`);

  };
  return (
    <>
      <Box
        sx={{ border: 1, width: "45vw", height: "60vh", background: "white" }}
      >
        <Typography sx={{ color: "black" }}>
          Tranquilo, podrás editarlos en cualquier momento ;)
        </Typography>
        <TextField
          id="outlined-required"
          label="Título"
          style={{ maxWidth: "60%", marginTop: "5%" }}
          onChange={handleTitulo}
        />
        <Box
          style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}
        >
          <TextField
            label="Sinopsis:"
            multiline
            rows={8}
            variant="standard"
            fullWidth
            onChange={handleSinopsis}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Typography style={{ marginRight: "5%" }}>Cover Photo:</Typography>
          <input type="file" accept="image/*" onChange={handleCoverUpload} />
        </Box>
       
          <Button onClick={handleClick}>Continuar</Button>
       
      </Box>
    </>
  );
}