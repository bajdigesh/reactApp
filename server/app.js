const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const UserRoute = require("./routes/UserRoute");
app.use(cors());
app.use("/api", UserRoute);

app.listen(port, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Server is running on ${port}`);
});
