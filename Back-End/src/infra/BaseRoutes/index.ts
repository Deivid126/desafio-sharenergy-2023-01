import { Router } from "express";
import routes from "../../controller/routes";

const route = Router();

route.use(routes);

export default route;