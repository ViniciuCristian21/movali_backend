import { serverHttp } from "./app";
require('dotenv/config');

const port = process.env.PORT || 4000;

serverHttp.listen(port, () => console.log(`Server is running http://localhost:${port}`));



