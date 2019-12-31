import IController from './IController';

type MiddlewareFunction = (...args: any[]) => void;

interface IFacadeConfig {
  port: number;
  controllers: IController[];
  middleware: MiddlewareFunction[];
}

export default IFacadeConfig;
