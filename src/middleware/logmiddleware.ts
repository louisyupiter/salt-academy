import { Request, Response, NextFunction } from "express";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  console.log(req.url);
  next();
};