import { Box, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const A4_WIDTH = 2480; // Width of A4 page in pixels
const A4_HEIGHT = 3508; // Height of A4 page in pixels
const ROW_HEIGHT = 20; // Height of each row in pixels

function ContenidoProyecto() {
  const [contenido, setContenido] = useState("");
  const [numRows, setNumRows] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleContenido = (e) => {
    setContenido(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const width = vw < vh ? vw : vh * (A4_WIDTH / A4_HEIGHT);
      const height = width * (A4_HEIGHT / A4_WIDTH);
      const writingAreaHeight = height - 100;
      const calculatedRows = Math.floor(writingAreaHeight / ROW_HEIGHT);
      setNumRows(calculatedRows);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const contentLength = contenido.length;
    const rowsPerPage = Math.floor((A4_HEIGHT - 100) / ROW_HEIGHT);
    const totalPages = Math.ceil(contentLength / (rowsPerPage * numRows));
    setTotalPages(totalPages);
    setCurrentPage(1);
  }, [contenido, numRows]);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const clientHeight = event.target.clientHeight;
    const scrollRatio = scrollTop / (clientHeight - ROW_HEIGHT);
    const page = Math.floor(scrollRatio * totalPages) + 1;
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          textAlign: "center",
        }}
      >
        Contenido del Proyecto
      </Typography>
      <Box
        sx={{
          width: "90%",
          height: "auto",
          aspectRatio: `${A4_WIDTH} / ${A4_HEIGHT}`,
          border: "1px solid gray",
          p: 1,
          overflowY: "scroll",
        }}
        onScroll={handleScroll}
      >
        <TextField
          multiline
          fullWidth
          rows={numRows}
          value={contenido}
          onChange={handleContenido}
          sx={{
            minHeight: 0,
            flexGrow: 1,
            resize: "none",
            fontSize: "14px",
            lineHeight: "20px",
            fontFamily: "Arial",
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mt: 2,
        }}
      >
        {`Página ${currentPage} de ${totalPages}`}
      </Typography>
    </Box>
  );
}

export default ContenidoProyecto;
