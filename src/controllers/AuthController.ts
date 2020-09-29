import * as express from 'express';
import * as jwt from "jsonwebtoken";
import ResponseHelper from '../helpers/response';
import UserModel from '../models/UserModel';

class AuthController {
  public path = '/auth';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.post(`${this.path}/login`, this.login);
  }


  login = (request: express.Request, response: express.Response) => {
    const userModel = UserModel.getInstance();
    const user = userModel.getById(request.body.id);
    if (user) {
      if (user.password == request.body.password) {
        const token = jwt.sign(
          { id: user.id, name: user.name, role: user.role },
          '123',
          { expiresIn: "1h", issuer: "saltacademy" }
        );

        //Send the jwt in the response
        ResponseHelper.responseSuccess(response, token, 'Success token');
        return;
      }
    }
    ResponseHelper.responseError(response, 400, 'Email atau password salah');
  }
}

export default AuthController;