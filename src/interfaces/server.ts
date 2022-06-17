export default interface IServer {
  setRoutes(...routes: any[]): void;
  setMiddlewares(): void;
  listen(port: number, cb: () => void): void;
  configure(): void;
  initialize(): void;
}
