const { getAdminLogin } = require("./login.service");

const md5 = require('md5');
const { sign } = require("jsonwebtoken");

module.exports = {
    adminlogin:(req, res) =>{
        const body = req.body;
        // console.log(body);
        // die;
        getAdminLogin(body.email, (err, results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Your Email Id Wrong!!"
                });
            }
              const dbpass = results.password;
              const inputpass = md5(body.password);
                // console.log(dbpass);
            const resultok = (dbpass == inputpass);
                // console.log(resultok);
                if(resultok){
                    // console.log('ok');
                    results.password = undefined;
                    const jsontoken = sign({resultok: results }, "ajaymakebythisapi",{
                        expiresIn:"12h"
                    });
                    return res.json({
                        success:1,
                        message:"Login Successfully",
                        token:jsontoken
                    })
                }else{
                    return res.json({
                        success:0,
                        message:"Invalid Password!!"
                    })
                }

        })
    }
}