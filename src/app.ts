import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
var cors = require('cors')

class App {
  public app: express.Application;
  public port: number | string;

  constructor(controllers: any[], port: number | string) {
    this.app = express();
    this.port = port;

    //options for cors midddleware

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    var corsOptions = {
      origin: 'http://localhost:4200',
    }
    this.app.use(cors(corsOptions));
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;