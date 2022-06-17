import IRoutes from "../interfaces/route";
import { Router } from "express";
export default class ExpressRoutes implements IRoutes<Router> {
  router: Router;
  constructor() {
    this.router = Router();
  }
  setRoutes(): Router {
    this.router.get("/", (req, res) => {
      res.send("Hola Mundo");
    });
    return this.router;
  }
}
