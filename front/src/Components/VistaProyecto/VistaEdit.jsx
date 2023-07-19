import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { findProyecto } from "../../Services/proyecto.services";
import { useLocation, useParams } from "react-router-dom";
import TextEditor from "../Proyecto/TextEditor/TextEditor";
import TextEditor2 from "../Proyecto/TextEditor/TextEditor2";

export default function VistaEdit({ proyecto_id }) {
  const theme = useTheme();
  console.log(proyecto_id);
  const location = useLocation();

  const data = location.state?.data;
  const proyecto = data;
  console.log(data);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection:'column',alignItems:'center' }}>
        <Card sx={{ width: "600px", margin:'30px' }}>
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{
                width: 151,
                objectFit: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              image="data:image/png;base64,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" // Replace with the actual image URL from the proyecto
              alt="una imagen" // Replace with the appropriate alt text from the proyecto
            />
            <CardContent
              sx={{
                flex: "1 1 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField required label="titulo" defaultValue={data.titulo} onChange={(e)=> proyecto.titulo = e.target}/>
            </CardContent>
          </Box>
        </Card>
        <TextEditor2 proyecto={proyecto}/>
      </Box>
    </>
  );
}
