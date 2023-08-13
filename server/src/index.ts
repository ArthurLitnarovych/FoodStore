import * as fs from 'fs';
import express from 'express';
import config from './config/config'

const app = express();

app.get("/api", (req, res) => {
    res.json({"users" : ["1", "2", "3", "4", "5", "6", "7", "8"]});
});

app.listen(config.port, () => console.log(`Server started on port ${ config.port }`));