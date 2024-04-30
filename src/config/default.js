import dotenv from "dotenv";

dotenv.config();

const configPayload = {
	server: {
		port: process.env.PORT || 3000,
	},
	mongodb: {
		url: process.env.MONGODB_URL,
		db_name: process.env.MONGODB_DBNAME,
		username: process.env.MONGODB_USERNAME || "",
		password: process.env.MONGODB_PASSWORD || "",
	},
};

export default configPayload;
