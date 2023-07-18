import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import { findProyecto } from "../../Services/proyecto.services";
import { useLocation, useParams } from "react-router-dom";

export default function VistaEdit({ proyecto_id }) {
  const theme = useTheme();
  console.log(proyecto_id);
  const location = useLocation();

  const data = location.state?.data;
  const proyecto = data;
  console.log(data);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "600px", marginTop: "5%" }}>
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151, objectFit: "cover" }}
              image={proyecto.portada} // Replace with the actual image URL from the proyecto
              alt={proyecto.portada} // Replace with the appropriate alt text from the proyecto
            />
            <CardContent sx={{ flex: "1 1 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{ marginRight: theme.spacing(2) }}
              >
                {proyecto.titulo}{" "}
                {/* Replace with the appropriate property from the proyecto */}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ marginTop: theme.spacing(2) }}
                >
                  {proyecto.sinopsis}{" "}
                  {/* Replace with the appropriate property from the proyecto */}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <Box
          className="A-4"
          dangerouslySetInnerHTML={{ __html: proyecto.contenido }}
          sx={{
            marginTop: "5%",
            width: "70%",
            minHeight: "1287px",
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
          }}
        ></Box>
      </Box>
    </>
  );
}
