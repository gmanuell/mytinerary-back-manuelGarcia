const bad_request = (error, req, res, next) => {
    console.log(error)
    if (error.name == "ValidationError") {
        return res.status(400).json({
            success: false,
            response: error,
            message: `Bad request`
        })
    }
    next(error)
}
export default bad_request