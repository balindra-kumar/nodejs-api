const responseHandler = require("../utils/responseHandler");
const User = require("../models/userModel");

const userController = {
    getAllUsers: async (req, res)=>{
        try{
            const users = await User.getAllUsers();
            responseHandler.success(res, users);
        }catch(error){
            responseHandler.error(res, error)
        }
    }
}
module.exports = userController;