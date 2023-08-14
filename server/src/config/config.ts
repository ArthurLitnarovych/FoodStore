import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

type configT = {
    port: number | string
    mongodbURL: string
};

const config: configT = {
    port: process.env.PORT || 5000,
    mongodbURL: String(process.env.MONGODBURL)
};

export default config;