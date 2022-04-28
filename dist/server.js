"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv/config');
const port = 4000;
app_1.serverHttp.listen(process.env.PORT || port, () => console.log(`Server is running http://localhost:${port}`));
