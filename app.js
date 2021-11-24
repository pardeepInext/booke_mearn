import { config } from 'dotenv';
config();
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connection from './db/connection';

import booksRouter from './routes/books';

var app = express();
connection();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', booksRouter);

module.exports = app;
