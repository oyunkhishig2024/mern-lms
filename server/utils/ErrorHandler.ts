class ErrorHandler extends Error {
    statusCode: Number; // Use lowercase 'umber' for the type
    
    constructor(message: any, statusCode: Number) { // Use lowercase 'number' here as well
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;

export default ErrorHandler;