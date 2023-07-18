import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Proyecto from "../Components/Proyecto/Proyecto";
import MisProyectos from "../Pages/MisProycetos/MisProyectos";
import NuevoProyecto from "../Components/Proyecto/NuveoProyecto/NuevoProyecto";
import ContenidoProyecto from "../Components/Proyecto/ContenidoProyecto/ContenidoProyecto";
import TextEditor from "../Components/Proyecto/TextEditor/TextEditor";
import ListaProyectos from "../Components/ListaProyectos/ListaProyectos";
import VistaProyecto from "../Components/VistaProyecto/VistaProyecto";
import TodosProyctos from "../Pages/TodosProyectos/TodosProyectos";
import ListaUsuario from "../Components/ListaUsuario/ListaUsuario";

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
    element: <ListaUsuario />,
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
    path: "usuario/:usuario_id/proyectos/:proyecto_id",
    element: <VistaProyecto />,
  },
  {
    path: "/todos",
    element: <ListaProyectos />,
  },
]);

export default router;
