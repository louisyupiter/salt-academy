import * as express from 'express';

export interface IControllerBase {
  intializeRoutes(): void;
  get(request: express.Request, response: express.Response): void;
}