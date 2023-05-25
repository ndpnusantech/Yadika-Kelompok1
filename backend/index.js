import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// file upload
import fileUpload from "express-fileupload";
import MovieRoute from "./routers/MovieRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(MovieRoute);
// 
// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server up and running on PORT ${process.env.APP_PORT}`);
});
