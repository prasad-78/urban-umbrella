export function successResponse (res) {
	return res.status(200).json(null);
}

export function successResponseWithData(res, data) {
	return res.status(200).json(data);
}

export function createResponse (res, data) {
	return res.status(201).json(data);
}

export function noContentResponse (res) {
	return res.status(204).json(null);
}

export function errorResponse (res, data) {
	var errData = {
		status: data.name,
		message: data.message
	};
	return res.status(500).json(errData);
}

export function notFoundResponse(res, msg) {
	const data = {
		message: msg
	};
	return res.status(404).json(data);
}

export function validationErrorWithData (res, data) {
	var resData = {
		status : data.name,
		message: data.message
	};
	return res.status(400).json(resData);
}

export function validationErrorForWrongCredentials (res, data) {
	var resData = {
		status: data.name,
		message: data.message
	};
	return res.status(401).json(resData);
}

export function userAlreadyExistsError(res) {
	return res.status(409).json({message: "User Already Exist. Please Login"});
}