
// Imports..
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import router from './router/router.js';

// Initializing vars..
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Setting up ejs engine
app.set('view engine', 'ejs')
app.set('views', './public/views');

// Middleware functions..
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'MySecret',
    resave: false,
    saveUninitialized: true
}));

// Using router..
app.use('/', router);

// Server listening..
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})