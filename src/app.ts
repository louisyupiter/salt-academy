import express from "express";
import * as bodyParser from 'body-parser';
const cors = require('cors')
import * as path from 'path';
import * as http from 'http';

class App {
  public app: express.Application;
  public port: number | string;
  private server: http.Server | undefined;


  constructor(controllers: any[], port: number | string) {
    this.app = express();
    this.port = port;

    //options for cors midddleware

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    const corsOptions = {
      origin: 'http://localhost:4200',
    }
    this.app.use(cors(corsOptions));
  }
  private initializeControllers(controllers: any[]) {
    this.app.use('/images', express.static(path.join(__dirname, 'public')))
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
  public listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;