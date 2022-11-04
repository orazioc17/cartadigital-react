// Aqui se gestionaran las rutas del cliente
import { ClientLayout } from "../layouts";
import { Home } from "../pages/Client";
import { Error404 } from "../pages/Error404";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;
