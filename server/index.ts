import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';

import { Task } from './src/tasks/tasks.entity';
import { tasksRouter } from './src/tasks/tasks.router';

const app: Express = express();
dotenv.config();

app.use(express());
app.use(bodyParser.json());
app.use(cors());

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

app.use('/tasks', tasksRouter);

const port = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('Data Source has been initialized');
  })
  .catch((err) => {
    console.log(
      'Error during Data Source initialization',
      err,
    );
  });
