import * as express from 'express';

class ResponseHelper {

  public static responseSuccess(response: express.Response, data: any, message = "Success retrieve data") {
    let resData = {
      success: true,
      message: message,
      data
    };
    if (data) {
      resData.data = data;
    }
    response.send(resData);
  }

  public static responseError(response: express.Response, status: number, message = "Internal server error") {
    let resData = {
      success: false,
      message: message,
    };
    response.status(status);
    response.send(resData);
  }
}

export default ResponseHelper;