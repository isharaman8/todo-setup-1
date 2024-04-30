import mongoose from "mongoose";

import config from "./default.js";

const init = () => {
	const mongoObj = config.mongodb;

	console.log(mongoObj);

	mongoose.connect(mongoObj.url, {
		dbName: mongoObj.db_name,
		user: mongoObj.username,
		pass: mongoObj.password,
	});
};

export { init };
