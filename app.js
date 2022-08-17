const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()); // postman or insomnia
app.use(bodyParser.urlencoded({ extended: true })); // html form

const indexRouter = require("./routes");

const port = process.env.PORT || 3000;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
