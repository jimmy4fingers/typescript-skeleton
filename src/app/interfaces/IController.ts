import { IRouter } from "express";

export default interface IController {
  router: IRouter;
  path: string;
  setRoutes(): void;
}
