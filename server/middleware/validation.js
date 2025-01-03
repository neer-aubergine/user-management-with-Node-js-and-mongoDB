import { body } from 'express-validator';

export const validateUserCreate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const validateUserLogin = [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required')
];