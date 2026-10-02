export function errorHandler(err,req,res,next){
    const statusCode = err.statusCode;
    res.status(statusCode || 500).json({
        success:false,
        message: err.message || "Internal server Error"
    })
}