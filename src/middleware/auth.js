import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
	console.log(req.path);
	if (req.path === '/user/login' || req.path === '/user/register') {
		next();
	} else {
		const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return validationErrorForWrongCredentials(req, {name: "Validation Error", message: "No Token Found"})
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return validationErrorForWrongCredentials(req, {name: "Validation Error", message: "Invalid Credentials"})
  }
  return next();
	}
};

export default verifyToken;