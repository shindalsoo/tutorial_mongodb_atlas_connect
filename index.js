import express from "express";
import mongoose from "mongoose";
import path from "path";
import config from "./config.js";
import routes from "./routes/routes.js";

mongoose.set("strictQuery", true); // 스키마에서 정의한 필드만 받는다.
mongoose
  .connect(
    config.mongodbUri,
    {},
  )
  .then(() => console.log("mongodb atlas connected"))
  .catch((e) => console.log(e));

const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(8088, () => {
  console.log(`Server Started at http://localhost:${8088}`);
});
