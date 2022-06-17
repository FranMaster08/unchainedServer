import IServer from "./interfaces/server";
import ServerExpress from "./model/server";

import { Express } from "express";

const server: IServer<Express> = new ServerExpress();
server.configure();
server.initialize();
