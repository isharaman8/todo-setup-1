import express from "express";

import { init as mongodbInit } from "./src/config/db.js";
import config from "./src/config/default.js";

const app = express();

const port = config.server.port;

app.listen(port, () => {
	mongodbInit();

	console.log(`Server is listening on port: ${port}`);
});
