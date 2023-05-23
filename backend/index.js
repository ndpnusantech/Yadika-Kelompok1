const express = require("express");
const cors = require("cors");
const MovieRoute = require("./routers/MovieRoute");

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(MovieRoute);

app.listen(PORT, () => console.log("server up and running"));
