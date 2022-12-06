import { Router } from 'express';
import {
  createValidator,
  updateValidator,
} from './tasks.validator';
import { tasksController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/', tasksController.getAll);

tasksRouter.post(
  '/',
  createValidator,
  tasksController.create,
);

tasksRouter.put(
  '/',
  updateValidator,
  tasksController.update,
);
