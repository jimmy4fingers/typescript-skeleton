import * as bodyParser from "body-parser";

import Controller from "./app/controllers/Controller";
import ExpressFacade from "./app/facade/ExpressFacade";

const app = new ExpressFacade({
    controllers: [
      new Controller()
    ],
    middleware: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true })
    ],
    port: Number(process.env.NODE_PORT)
});

app.listen();
