const { createCategory ,getallCategory ,deleteCagegory,categoryUpdate } = require("./category.controller");

const { checkToken} = require("../../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createCategory);
router.get("/", checkToken,getallCategory);
router.delete("/", checkToken,deleteCagegory);
router.put("/", checkToken,categoryUpdate);

module.exports = router;