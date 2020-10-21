import * as express from 'express';
import ResponseHelper from '../helpers/response';
import AccountsModels from '../models/AccountModels';

class AccountController {
  public path = '/account';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
  }


  async get(request: express.Request, response: express.Response) {
    const accounts = await AccountsModels.get();
    ResponseHelper.responseSuccess(response, accounts, 'Success retrieve user');
  }
}

export default AccountController;