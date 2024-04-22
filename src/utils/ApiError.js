class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = false;
        this.errors = errors
        Error.captureStackTrace(this, this.constructor)
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

const data = new ApiError(409, "User with email or username already exists")
console.log(data)
// export {ApiError}