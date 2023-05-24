import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import MovieRoute from './routes/MovieRoute.js'
// file upload
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();



// membuat table otomatis

(async()=>{
    await db.sync();
})();



app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);


app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(MovieRoute);


// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
