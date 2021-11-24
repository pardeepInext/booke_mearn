import express from 'express';
import BookController from '../controller/Book.controller';

const booksRouter = express.Router();

booksRouter.get('/', BookController.index);
booksRouter.post('/', BookController.create);

export default booksRouter;