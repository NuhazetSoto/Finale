import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../Header/Header";

export default function ProyectoEdit({ e, id }) {
  const theme = useTheme();
  const { usuario_id } = useParams();
  const proyecto_id = id;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "600px" }}>
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151, objectFit: "cover" }}
              image={e.portada} // Replace with the actual image URL from the proyecto
              alt={e.portada} // Replace with the appropriate alt text from the proyecto
            />
            <CardContent sx={{ flex: "1 1 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{ marginRight: theme.spacing(2) }}
              >
                {e.titulo}{" "}
                {/* Replace with the appropriate property from the proyecto */}
              </Typography>

              <Box
                className="bottom-group"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: theme.spacing(2),
                  padding: theme.spacing(2),
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography>
                  {e.autor}{" "}
                  {/* Replace with the appropriate property from the proyecto */}
                </Typography>
                {console.log(proyecto_id)}
                <Link
                  to={`/usuario/${usuario_id}/proyectos/${proyecto_id}`}
                  state={{ data: e }}
                >
                  <Button>Leer</Button>
                </Link>
                <Link
                  to={`/proyectos/${proyecto_id}/editar`}
                  state={{ data: e }}
                >
                  <Button variant="contained">Editar</Button>
                </Link>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </>
  );
}
