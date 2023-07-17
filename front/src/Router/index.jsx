import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Proyecto from "../Components/Proyecto/Proyecto";
import MisProyectos from "../Pages/MisProycetos/MisProyectos";
import NuevoProyecto from "../Components/Proyecto/NuveoProyecto/NuevoProyecto";
import ContenidoProyecto from "../Components/Proyecto/ContenidoProyecto/ContenidoProyecto";
import TextEditor from "../Components/Proyecto/TextEditor/TextEditor";
import ListaProyectos from "../Components/ListaProyectos/ListaProyectos";
import VistaProyecto from "../Components/VistaProyecto/VistaProyecto";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proyecto",
    element: <VistaProyecto />,
  },
  {
    path: "/usuario/:usuario_id/misproyectos",
    element: <ListaProyectos />,
  },
  {
    path: "/usuario/:usuario_id/misproyectos/nuevo",
    element: <NuevoProyecto />,
  },
  {
    path: "/usuario/:usario_id/misproyectos/:id",
    element: <TextEditor />,
  },
  {
    path: "/usuario/:usario_id/proyectos/:proyecto_id",
    element: <VistaProyecto />,
  },
]);

export default router;
