import * as express from 'express';
import ResponseHelper from '../helpers/response';
import * as jwt from "jsonwebtoken";
import AccountsModels from '../models/AccountModels';

class LoginController {
  public path = '/login';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.post(this.path, this.login);
  }


  async login(request: express.Request, response: express.Response) {
    try {
      const account = await AccountsModels.login(request.body.email, request.body.password);
      const token = jwt.sign(
        { id: account.id, name: account.name, role: account.role },
        '123',
        { expiresIn: "1h", issuer: "saltacademy" }
      );

      ResponseHelper.responseSuccess(response, token, 'Success login');
    } catch (e) {
      ResponseHelper.responseError(response, 401, 'Email or password is not valid');
    }
  }
}

export default LoginController;