import { rejects } from 'assert';
import { resolve } from 'path';
import connection from '../mysql';

class ProductModels {
  static async get(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      connection.query('select * from product', function (error, rows, fields) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(rows);
        }
      });
    })
  }

  static async getFeatured(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      connection.query('select * from product where isFeatured = 1', function (error, rows, fields) {
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

export default ProductModels;