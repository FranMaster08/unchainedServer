import express, { Express, Router } from "express";
import IServer from "../interfaces/server";
import morgan from "morgan";
import config from "../config";
import IRoutes from "../interfaces/route";
import ExpressRoutes from "../routes";

export default class ServerExpress implements IServer<Express> {
  app: Express;
  port?: number;
  constructor() {
    this.app = express();
    this.port = config.PORT as number;
  }
  initialize(): void {
    this.listen(this.port as number, () => console.log(" server is running"));
  }
  listen(port: number, cb: () => void): void {
    this.app.listen(port, cb);
  }
  setRoutes(routes: IRoutes<Router>): void {
    const rutas = routes.setRoutes();
    this.app.use("/", rutas);
  }
  setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }
  configure(): void {
    try {
      const rutas: IRoutes<Router> = new ExpressRoutes();
      this.setMiddlewares();
      this.setRoutes(rutas);
    } catch (error) {
      throw error;
    }
  }
}
