import IServer from "./interfaces/server";
import ServerExpress from "./model/server";

const server: IServer = new ServerExpress();
server.configure();
server.initialize();
