import App from '../app';
import AuthController from './controllers/AuthController';
import PostController from './controllers/PostController';
import UserController from './controllers/UserController';
require('dotenv').config()


const app = new App(
  [
    new UserController(),
    new AuthController(),
    new PostController(),
  ],
  process.env.PORT || 3000
);

app.listen();