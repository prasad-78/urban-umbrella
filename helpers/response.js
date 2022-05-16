export function successResponse (res, data) {
	return res.status(200).json(data);
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
	var data = {
		status: data.name,
		message: data.message
	};
	return res.status(500).json(data);
}

export function notFoundResponse (res) {
	return res.status(404).json([]);
}

export function validationErrorWithData (res, data) {
	var resData = {
		status : data.name,
		message: data.message
	};
	return res.status(400).json(resData);
}