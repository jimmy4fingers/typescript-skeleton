import IController from "./IController";

export default interface IFacadeConfig {
  port: number;
  controllers: IController[];
  middleware: any[];
}
