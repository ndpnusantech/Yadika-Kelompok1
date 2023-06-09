const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
// file upload
const fileUpload = require("express-fileupload");
const MovieRoute = require("./routers/MovieRoute.js");
const CityRoute = require("./routers/CityRoute.js");
const CgvRoute = require("./routers/CgvRoute.js");
const AudiRoute = require("./routers/Audi.js");
const SeatRoute = require("./routers/SeatRoute.js");
const TicketRoute = require("./routers/TicketRoute.js");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
// Router
app.use(MovieRoute);
app.use(CityRoute);
app.use(CgvRoute);
app.use(AudiRoute);
app.use(SeatRoute);
app.use(UserRoute);
app.use(TicketRoute);

// store.sync();

app.listen(PORT, () => {
  console.log(`Server up and running on PORT ${PORT}`);
});
