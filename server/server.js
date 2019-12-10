const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./src/routes")

app.use(cors());

routes.init(app);

app.listen(3000, () => {
  console.log("Servver listening on port 3000");
});
