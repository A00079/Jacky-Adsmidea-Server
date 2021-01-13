const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded

// Middlewares

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors());
dotenv.config();

// Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/careers", require("./routes/careers"));
app.use("/api/dashboard", require("./routes/dashboard"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
