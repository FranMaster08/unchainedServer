import IRoutes from "./route";
export default interface IServer<T> {
  setRoutes(routes: IRoutes<T>): void;
  setMiddlewares(): void;
  listen(port: number, cb: () => void): void;
  configure(): void;
  initialize(): void;
}
