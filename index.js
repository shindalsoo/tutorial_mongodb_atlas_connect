import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();
console.log(`ecode password:${encodeURIComponent("sds9050@#!")}`);

mongoose.set("strictQuery", true); // 스키마에서 정의한 필드만 받는다.
mongoose
  .connect(
    process.env.MONGODB_ATLAS_CONNECTION_STRING,
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
