import * as express from 'express';
import ResponseHelper from '../helpers/response';
import AccountsModels from '../models/AccountModels';
import ProductModels from '../models/ProductModels';

class ProductController {
  public path = '/product';
  public router = express.Router();


  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.get(this.path + '/feature', this.getFeatured);
  }

  async get(request: express.Request, response: express.Response) {
    try {
      const products = await ProductModels.get();
      products.map(x => {
        x.image = 'http://localhost:3002/images/products/' + x.image;
        return x;
      })
      ResponseHelper.responseSuccess(response, products, 'Success retrieve user product');
    } catch (e) {
      ResponseHelper.responseError(response, 500, 'Failed to  retrieve product');
    }

  }

  async getFeatured(request: express.Request, response: express.Response) {
    try {
      const products = await ProductModels.getFeatured();
      products.map(x => {
        x.image = 'http://localhost:3002/images/products/' + x.image;
        return x;
      })
      ResponseHelper.responseSuccess(response, products, 'Success retrieve user product');
    } catch (e) {
      ResponseHelper.responseError(response, 500, 'Failed to  retrieve product');
    }

  }


}

export default ProductController;