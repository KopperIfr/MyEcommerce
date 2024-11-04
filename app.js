
// Imports..
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';

// Initializing vars..
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware functions..
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Using router..


// Server listening..
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})