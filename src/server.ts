import App from './app';
import AuthController from './controllers/AuthController';
import PostController from './controllers/PostController';
import ProductCategoryController from './controllers/ProductCategoryController';
import ProductController from './controllers/ProductController';
import UserController from './controllers/UserController';
import AccountController from './controllers/AccountController';
import LoginController from './controllers/LoginController';
require('dotenv').config()


const app = new App(
  [
    new ProductController(),
    new ProductCategoryController(),
    new AccountController(),
    new LoginController(),
  ],
  process.env.PORT || 3000
);

app.listen();

export default app;