import { app } from './app';
import express, { NextFunction, Request, Response } from 'express';

require('dotenv').config();

// Unknown Route Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Route ${req.originalUrl} not found`) as any;
    error.statusCode = 404;
    next(error);
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
