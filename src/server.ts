import * as bodyParser from "body-parser";

import Controller from "./app/controllers/Controller";
import ExpressFacade from "./app/facade/ExpressFacade";
import IFacadeConfig from "./app/interfaces/IFacadeConfig";

// Express facade application config
const config: IFacadeConfig = {
  controllers: [
    new Controller()
  ],
  middleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
  ],
  port: Number(process.env.NODE_PORT)
};

// init and start server
const app = new ExpressFacade(config);
app.listen();
