import connection from '../mysql';

class AccountsModels {
  static async get() {
    return new Promise((resolve, reject) => {
      connection.query('select * from user', function (error, rows, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    })
  }

  static async login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query(`select * from user where email = '${email}' and password = '${password}' limit 1`, function (error, rows, fields) {
        if (error) {
          reject(error);
        } else {
          if (rows.length > 0) {
            resolve(rows[0]);
          } else {
            reject('Not found');
          }
        }
      });
    })
  }
}

export default AccountsModels;