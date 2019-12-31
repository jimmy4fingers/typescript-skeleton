import Router, { IRouter, Request, Response } from "express";

import IController from "../interfaces/IController";

class Controller implements IController {

  public router: IRouter = Router();
  public path: string = "/";

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get(this.path, this.handler);
  }

  public handler = (request: Request, response: Response) => {
    response.send({ content: "hello there." });
  }
}

export default Controller;
