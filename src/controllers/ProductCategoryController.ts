import * as express from 'express';
import ResponseHelper from '../helpers/response';
import ProductCategoryModels from '../models/ProductCategoryModels';

class ProductCategoryController {
  public path = '/product-category';
  public router = express.Router();


  constructor() {
    this.intializeRoutes();

  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
  }

  async get(request: express.Request, response: express.Response) {
    try {
      const productCategories = await ProductCategoryModels.get();
      ResponseHelper.responseSuccess(response, productCategories, 'Success retrieve user product category');
    } catch (e) {
      ResponseHelper.responseError(response, 500, 'Failed to  retrieve product category');
    }

  }


}

export default ProductCategoryController;