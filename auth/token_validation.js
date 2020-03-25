const jwt = require("jsonwebtoken");

module.exports = {
    checkToken:(req, res, next) =>{
        let token = req.get("authorization");
        if(token){
            jwt.verify(token, "ajaymakebythisapi", (err, decoded) =>{
                if(err){
                    res.json({
                        success:0,
                        message:"Invalid Token..........."
                    });
                }else{
                    next();
                }
            })
        }else{
            res.json({
                success:0,
                message:"Access Denied! Unauthorization Admin!!"
            })
        }
    }
}