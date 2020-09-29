import * as express from 'express';
import ResponseHelper from '../helpers/response';
import { IControllerBase } from '../interfaces/IControllerBase.interface';
import { checkJwt } from '../middleware/checkJwt';
import PostModel from '../models/PostModel';

class PostController implements IControllerBase {
  public path = '/posts';
  public router = express.Router();


  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.get(this.path, [checkJwt], this.get);
    this.router.post(`${this.path}`, [checkJwt], this.create);
    this.router.put(`${this.path}/:id`, [checkJwt], this.update);
  }

  get(request: express.Request, response: express.Response) {
    const userId = response.locals.jwtPayload.id;
    const postModel = PostModel.getInstance();
    const posts = postModel.getByAuthorId(userId);
    ResponseHelper.responseSuccess(response, posts, 'Success retrieve user post');

  }

  create(request: express.Request, response: express.Response) {
    const userId = response.locals.jwtPayload.id;
    const role = response.locals.jwtPayload.role;
    if (role !== 'admin') {
      ResponseHelper.responseError(response, 401, 'Unauthorized role');
      return;
    }
    const postModel = PostModel.getInstance();
    postModel.create(request.body.id, userId, request.body.name);
    ResponseHelper.responseSuccess(response, null, 'Success create user post');

  }

  update(request: express.Request, response: express.Response) {
    const userId = response.locals.jwtPayload.id;
    const id = parseInt(request.params.id);
    const postModel = PostModel.getInstance();
    try {
      const post = postModel.update(id, request.body.name, userId);
      ResponseHelper.responseSuccess(response, post, 'Success update post');
    } catch (err) {
      ResponseHelper.responseError(response, err.message == 'Unauthorized' ? 401 : 404, err.message);
    }
  }

}

export default PostController;