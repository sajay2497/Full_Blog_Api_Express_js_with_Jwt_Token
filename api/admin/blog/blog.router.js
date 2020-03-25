const { insertblog,getallblog,blogdetele,blogupdate,singleblogById} = require("./blog.controller");

const router = require("express").Router();

const{ checkToken } = require("../../../auth/token_validation");

router.get("/", checkToken, getallblog);
router.post("/", checkToken, insertblog);
router.delete("/", checkToken, blogdetele);
router.post('/single', checkToken, singleblogById);
router.put('/', checkToken, blogupdate);

module.exports = router;