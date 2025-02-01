const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const userRouter = require("./Route/userRouter");
const postRouter = require("./Route/postRouter");
const commentRouter = require("./Route/commentRouter");
const likeRouter = require("./Route/likeRouter");

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Сервер ${PORT} дээр ажиллаж байна!`));
