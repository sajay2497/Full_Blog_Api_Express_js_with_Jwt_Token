const pool = require("../../../config/database");

module.exports ={
    insert:(data, callBack) =>{
        pool.query(`insert into blog (category_id, title, description ) values (?,?,?)`,
            
            [
                data.category_id,
                data.title,
                data.description,
            ],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    fetchAll:callBack =>{
        pool.query(`select * from blog`,
        [],
        (error, results, fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        }
        )
    },
    getBlogById:(id, callBack) =>{
        pool.query(`select * from blog where id =?`,
            [id],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    detele:(data, callBack)=>{
        pool.query(`delete from blog where id =?`,
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
        pool.query(`update blog set title=?, category_id=?, description=? where id =?`,
            [
                data.title,
                data.category_id,
                data.description,
                data.id,
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