if (process.env.NODE_ENV !== "production") require("dotenv").config();

//Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// Files
const db = require("./database");

// //Routes
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const musicRoute = require("./routes/music.route");

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("MySql Connected...");
});
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(cors());
app.use("/api", express.static("uploads"));
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", musicRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
