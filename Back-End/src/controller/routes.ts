import { Router } from "express";
import Controller from "./User"
import Login from "./Login"
import authenticaded from "../middlewares/auth";

const routes = Router();

routes.post("/user",authenticaded,Controller.create);
routes.get("/user",authenticaded,Controller.findAll);
routes.get("/user/:id",authenticaded,Controller.findOne);
routes.put("/user/:id",authenticaded, Controller.uptade);
routes.delete("/user/:id",authenticaded,Controller.delete);
routes.post("/login",Login.login);


export default routes;
