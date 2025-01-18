const connection = require('../config/db.js');
const Users = {
    getAllUsers : async()=>{
        const [rows] = await connection.query("select * from student");
        return rows;
    }
}

module.exports = Users;