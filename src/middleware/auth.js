import jwt from "jsonwebtoken";
import { validationErrorForWrongCredentials } from "../helpers/response.js";

const verifyToken = (req, res, next) => {
	if (req.path === "/user/login" || req.path === "/user/register" || req.path === "/user/delete") {
		next();
	} else if (!req.headers["authorization"]) {
		return validationErrorForWrongCredentials(res, {
			name: "Validation Error",
			message: "No Token Found",
		});
	} else {
		const token = req.headers["authorization"].split(" ")[1];
		try {
			const decoded = jwt.verify(token, process.env.TOKEN_KEY);
			req.user = decoded;
		} catch (err) {
			return validationErrorForWrongCredentials(res, {
				name: "Validation Error",
				message: "Invalid Credentials",
			});
		}
		return next();
	}
};

export default verifyToken;
