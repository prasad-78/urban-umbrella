import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  errorResponse,
  successResponseWithData,
  validationErrorWithData,
	validationErrorForWrongCredentials,
	noContentResponse,
	userAlreadyExistsError
} from "../helpers/response.js";

export default class LoginData {}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return validationErrorWithData(res, {
      name: "Validation Error",
      message: "All input is required",
    });
  }

  User.findOne({ email: email })
    .then(async (user) => {
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        return successResponseWithData(res, { token: token });
      }
      return validationErrorForWrongCredentials(res, {
        name: "Validation Error",
        message: "Invalid Credentials",
      });
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  if (!(email && password && firstName && lastName)) {
    return validationErrorWithData(res, {
      name: "Validation Error",
      message: "All input is required",
    });
  }

  const oldUser = await User.findOne({ email: email });

	if (oldUser) {
		return userAlreadyExistsError(res)
  }

  const encryptedPassword = await bcrypt.hash(password, 10);
  User.create({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password: encryptedPassword,
  })
    .then((user) => {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      user.token = token;
      return successResponseWithData(res, user);
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}

export function deleteUser(req, res) {
	const { email, password } = req.body;

  if (!(email && password)) {
    return validationErrorWithData(res, {
      name: "Validation Error",
      message: "All input is required",
    });
  }

  User.findOneAndDelete({ email: email })
    .then(async (user) => {
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        return noContentResponse(res);
      }
      return validationErrorForWrongCredentials(res, {
        name: "Validation Error",
        message: "Invalid Credentials",
      });
    })
    .catch((err) => {
      return errorResponse(res, err);
    });
}
