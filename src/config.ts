import * as bodyParser from 'body-parser';
import expressWinston from 'express-winston';
import winston from 'winston';

import Controller from './app/controllers/Controller';
import IFacadeConfig from './app/interfaces/IFacadeConfig';

// logging middleware config
const loggerConfig = {
  colorize: false,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  transports: [
    new winston.transports.Console()
  ]
};

// Express facade application config
const config: IFacadeConfig = {
  controllers: [
    new Controller()
  ],
  middleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    expressWinston.logger(loggerConfig)
  ],
  port: Number(process.env.NODE_PORT)
};

export default config;
