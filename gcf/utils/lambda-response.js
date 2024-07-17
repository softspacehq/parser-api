"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = errorResponse;
exports.corsErrorResponse = corsErrorResponse;
exports.successResponse = successResponse;
exports.corsSuccessResponse = corsSuccessResponse;
function lambdaResponse({ json, statusCode, allowCORS = false, }) {
    const response = {
        statusCode,
        body: JSON.stringify(json),
    };
    if (allowCORS) {
        response.headers = {
            'Access-Control-Allow-Origin': '*',
        };
    }
    return response;
}
function errorResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 500,
    });
}
function corsErrorResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 500,
        allowCORS: true,
    });
}
function successResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 200,
    });
}
function corsSuccessResponse(json) {
    return lambdaResponse({
        json,
        statusCode: 200,
        allowCORS: true,
    });
}
