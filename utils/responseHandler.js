
const responseHandler = {
    success: (res, data, status = 200)=>{
        res.status(status).json({success: true, data: data})
    },
    error: (res, error, status = 500)=>{
        res.status(status).json({success: false, error: error.message })
    }
}

module.exports = responseHandler;