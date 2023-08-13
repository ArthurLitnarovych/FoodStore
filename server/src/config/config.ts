import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, 'config', '.env') });

type configT = {
    port: number | string
};

const config: configT = {
    port: process.env.PORT || 5000,
};

export default config;