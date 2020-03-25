const pool = require("../../../config/database");

module.exports = {
    getAdminLogin : (email, callBack) => {
        pool.query(
            `select * from super_login where email = ?`,
            [email],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}