const express = require("express");

const userRoutes = require('./routes/fetchUsers');

const app = express();

app.use("/fetchUsers",userRoutes);

app.listen(8080);
