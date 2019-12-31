import express, { Application } from "express";

import IController from "../interfaces/IController";
import IFacadeConfig from "../interfaces/IFacadeConfig";

class ExpressFacade {

  public app: Application;
  public port: number;

  constructor(config: IFacadeConfig) {
    this.app = this.setApplication();
    this.port = config.port;
    this.config(config);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // console.log(`App listening on the http://localhost:${this.port}`);
    });
  }

  private config(config: IFacadeConfig) {
    const assignMiddleware = (item: any) => {
      this.app.use(item);
    };
    const assignRoutes = (controller: IController) => {
      this.app.use(controller.path, controller.router);
    };
    config.middleware.map(assignMiddleware);
    config.controllers.map(assignRoutes);
  }

  private setApplication(): Application {
    return express();
  }
}

export default ExpressFacade;
