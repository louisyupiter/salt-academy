import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import ResponseHelper from "../helpers/response";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers["authorization"];
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, '123');
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    ResponseHelper.responseError(res, 401, 'Unauthorized');
    return;
  }

  next();
};