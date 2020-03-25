const { adminlogin } = require("./login.controller");

const router = require ("express").Router();

router.post("/", adminlogin);

module.exports = router;