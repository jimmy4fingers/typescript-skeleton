import ExpressFacade from "./app/facades/ExpressFacade";
import config from "./config";

// init and start server
const app = new ExpressFacade(config);
app.listen();
