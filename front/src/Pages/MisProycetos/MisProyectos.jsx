import { Box, Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import ListaProyectos from '../../Components/ListaProyectos/ListaProyectos';

function MisProyectos() {

  const userId = localStorage.getItem('id')
  return (
    <>
      <Box>
        <div>MisProyectos</div>
      </Box>
      <ListaProyectos />
      <Link to={`/usuario/${userId}/misproyectos/nuevo`}>
        <Button>Crear Proyecto</Button>
      </Link>
    </>
  );
}

export default MisProyectos