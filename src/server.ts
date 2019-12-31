import ExpressFacade from "./app/facade/ExpressFacade";
import config from "./config";

// init and start server
const app = new ExpressFacade(config);
app.listen();
