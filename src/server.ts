import App from '../app';
import AuthController from './controllers/AuthController';
import PostController from './controllers/PostController';
import UserController from './controllers/UserController';

const app = new App(
  [
    new UserController(),
    new AuthController(),
    new PostController(),
  ],
  5000,
);

app.listen();