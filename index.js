const express = require("express");
const app = express();
app.use(express.json());

const adminLogin = require("./api/admin/login/login.router");
const category = require("./api/admin/category/category.router");
const blog = require("./api/admin/blog/blog.router");
// index
app.get('/', (req, res) => res.send('Hello World!'));
// index
app.use("/api/admin", adminLogin);
app.use("/api/category", category);
app.use("/api/blog", blog);

app.listen(3000, () => console.log(`Example app listening on port: 3000`))