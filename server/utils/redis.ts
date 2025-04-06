import { Redis } from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if(process.env.REDIS_URL) {
        console.log("Redis URL is set");
        return process.env.REDIS_URL;
    }
    throw new Error("Redis URL failed");
};

export const redis = new Redis(redisClient());