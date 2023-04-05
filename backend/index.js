import express from "express";
import cors from "cors";
import MovieRouter from "./routes/MovieRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(MovieRouter);

app.listen(5000, () => console.log("server up and running on port 5000 ..."));
