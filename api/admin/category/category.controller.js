const { create, fetchall, deletecat, update } =require("./category.service");

module.exports = {
    createCategory:(req, res) =>{
        const body = req.body;
        console.log(body);
        create(body, (err, results) =>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error!!"
                })
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    getallCategory:(req, res) =>{
        fetchall((err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    deleteCagegory:(req, res) =>{
        const data = req.body;
        deletecat(data,(err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    succes:0,
                    message:"Record Not Found"
                });
            }
            return res.json({
                success:1,
                message:"Category Deleted SuccessFully!!"
            });
        });
    },
    categoryUpdate:(req, res) =>{
        const body =req.body;
        update(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"Update Successfully!!"
            })
        })
    }


}
