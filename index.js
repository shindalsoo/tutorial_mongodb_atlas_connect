const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.set("strictQuery", true); // 스키마에서 정의한 필드만 받는다.
mongoose
  .connect(
    `mongodb+srv://shindalsoo:9Iv2bB1hVRAQU8xl@zioyou.zkjwmfy.mongodb.net/myFirstDatabase?authSource=admin`,
    {},
  )
  .then(() => console.log("mongodb atlas connected"))
  .catch((e) => console.log(e));

const app = express();
const routes = require("./routes/routes");

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(8088, () => {
  console.log(`Server Started at http://localhost:${8088}`);
});
