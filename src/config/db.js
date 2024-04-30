import mongoose from "mongoose";

import config from "./default.js";

const init = () => {
	const mongoObj = config.mongodb;

	mongoose
		.connect(mongoObj.url, {
			dbName: mongoObj.db_name,
			user: mongoObj.username,
			pass: mongoObj.password,
		})
		.then(() => {
			console.log("connected to mongodb");
		})
		.catch((err) => {
			console.log(err);
		});
};

export { init };
