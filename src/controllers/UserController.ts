import * as express from 'express';
import ResponseHelper from '../helpers/response';
import { IControllerBase } from '../interfaces/IControllerBase.interface';
import { logMiddleware } from '../middleware/logmiddleware';
import UserModel from '../models/UserModel';

class UserController implements IControllerBase {
  public path = '/users';
  public router = express.Router();


  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, [logMiddleware], this.get);
    this.router.post(this.path, this.create);
    this.router.put(`${this.path}/:id`, this.update);
  }

  get(request: express.Request, response: express.Response) {
    const userModel = UserModel.getInstance();
    ResponseHelper.responseSuccess(response, userModel.get());
  }

  create = (request: express.Request, response: express.Response) => {
    const userModel = UserModel.getInstance();
    userModel.create(request.body.id, request.body.name, request.body.password, request.body.role);
    response.status(201);
    ResponseHelper.responseSuccess(response, null, 'Success created');
  }

  update = (request: express.Request, response: express.Response) => {
    const userModel = UserModel.getInstance();
    const id = parseInt(request.params.id, 0);
    const user = userModel.update(id, request.body.name);
    if (!user) {
      ResponseHelper.responseError(response, 404, 'User not found');
      return;
    }
    ResponseHelper.responseSuccess(response, user, 'Success updated');
  }

}

export default UserController;