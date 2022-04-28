import { serverHttp } from "./app";
require('dotenv/config');

const port = 4000;

serverHttp.listen(process.env.PORT || port, () => console.log(`Server is running http://localhost:${port}`));



