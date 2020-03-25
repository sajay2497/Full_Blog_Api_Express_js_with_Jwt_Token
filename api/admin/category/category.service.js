const pool = require("../../../config/database");

module.exports = {
    create:(data, callBack) =>{
        pool.query(
            `insert into category (category_name) values(?)`,
            [data.category_name],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    fetchall:callBack =>{
        pool.query(`select * from category`,
        [],
        (error,results, fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        }
        )
    },
    deletecat:(data,callBack) =>{
        pool.query(`delete from category where id=?`,
        [data.id],
        (error, results, fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        }
        )
    },
    update:(data, callBack) =>{
        pool.query(`update category set category_name=? where id=?`,
        [
            data.category_name,
            data.id
        ],
        (error, results, fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        }
        )
    }
}