import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

// El triple punto antes de los router es para poder concatenar los 2 objetos dentro
// Del array
const routes = [
  ...routerAdmin,
  ...routerClient,
  {
    // Si no se encuentra nada de lo de arriba y para por lo tanto poder usar
    // el error 404, el ultimo elemento de la lista de rutas va a tener un
    // path:"*", indicando que cualquier otra ruta que NO se consiga arriba,
    // dara como resultado error 404
    path: "*",
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
