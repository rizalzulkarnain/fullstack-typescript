import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The Task Title does not empty...')
    .trim()
    .isString()
    .withMessage('Title needs to be in Text Format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The Task Date is mandatory')
    .isString()
    .withMessage('The Date is needs to be a valid format'),
  body('description')
    .trim()
    .isString()
    .withMessage(
      'The Task Description to be in Text Format',
    ),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.low, Priority.high])
    .withMessage(
      'The Task Priority can only be normal, low or high',
    ),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'The Task Status can only be todo, in progress or completed',
    ),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The Task ID Update is mandatory')
    .trim()
    .isString()
    .withMessage('ID need to be a valid UUID format'),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed,
    ])
    .withMessage(
      'The Task Status can only be todo, in progress or completed',
    ),
];
