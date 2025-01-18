/*
Services contain the core business logic, which can include interacting with the models,
 validating data, or integrating with third-party services.
*/

const userModel = require('../models/userModel');

const getAllUsers = async (req, res)=>{
    try{
        return await userModel.getAllUsers();
    }catch(err){
        throw new Error('Error in userService: ' + err.message);  
    }
}

const createUser = async (user)=>{
    try{
        const userId = await userModel.createUser(user);
        return {id: userId, ...user};
    }catch(err){
        throw new Error('Error in userService: ' + err.message);
    }
}


module.exports ={
    getAllUsers,
    createUser
}