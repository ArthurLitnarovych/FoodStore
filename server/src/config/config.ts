import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '.env') });

type configT = {
    port: number | string
    mongodbURL: string
};

const config: configT = {
    port: process.env.PORT || 5000,
    mongodbURL: `mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@cluster0.c81nfsj.mongodb.net/`
};

export default config;