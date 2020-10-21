import connection from '../mysql';

class ProductCategoryModels {
  static async get() {
    return new Promise((resolve, reject) => {
      connection.query('select id, name from product_category', function (error, rows, fields) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(rows);
        }
      });
    })
  }
}

export default ProductCategoryModels;