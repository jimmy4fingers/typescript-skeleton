import * as express from "express";

import IController from "../interfaces/IController";

class Controller implements IController {

  public router: express.IRouter = express.Router();
  public path: string = "/";

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get(this.path, this.handler);
  }

  public handler = (request: express.Request, response: express.Response) => {
    response.send({ content: "hello there." });
  }
}

export default Controller;
