import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comments.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/users", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/comment", commentRoutes);

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
