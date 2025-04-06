
require('dotenv').config();

import express, { NextFunction, Request, Response } from 'express';
export const app = express();

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './middleware/error';
import userRouter from './routes/user.route';



//body parser

app.use(express.json({limit: '50mb'}));

//cookie parser
app.use(cookieParser());

//cors cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
    
}));

//routes
app.use('/api/v1', userRouter);

//testing api

app.get('/test', (req: Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success: true,  
        message: "API is working"
    })
});

app.get("/example", async (req: Request, res: Response) => {
    try {
      // Some logic here
      res.status(200).json({ success: true, data: "Example response" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  });

  app.use(ErrorMiddleware);
  



  
  