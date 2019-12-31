import HandleFunction from "connect";

import IController from "./IController";

interface IFacadeConfig {
  port: number;
  controllers: IController[];
  middleware: HandleFunction.NextHandleFunction[];
}

export default IFacadeConfig;
