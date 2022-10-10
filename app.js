const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const commonRoutes = require("./api/routes/common")

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://dark-ruby-lizard-kilt.cyclic.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/personal_database/", commonRoutes);

app.listen(port, () => console.log("Server is running on port " + port));
