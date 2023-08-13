import * as fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const app = express();

app.get("/api", (req, res) => {
    res.json({"users" : ["1", "2", "3", "4", "5", "6", "7", "8"]});
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${ process.env.PORT }`));