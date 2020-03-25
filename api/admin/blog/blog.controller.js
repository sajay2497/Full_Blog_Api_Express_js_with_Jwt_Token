const { insert, fetchAll, getBlogById, detele ,update } = require("./blog.service");

module.exports = {
    insertblog: (req, res) => {
        const body = req.body;
        insert(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    messges: "Database Connection Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getallblog: (req, res) => {
        fetchAll((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    blogdetele: (req, res) => {
        const data = req.body;
        // console.log(data.id)
        detele(data,(err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record Not Found!!"
                })
            }
            return res.json({
                success:1,
                message:"Blog Deleted Successfully!!"
            })
        })
    },
    singleblogById:(req, res) =>{
        const data = req.body;
        getBlogById(data.id,(err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Recored Not Found!!"
                })
            }
            return res.json({
                success:1,
                message: results
            })
        })
    },
    blogupdate:(req,res)=>{
        const data = req.body;
        update(data,(err,results) =>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"Updated Successfully!!"
            })
        })
    }

}