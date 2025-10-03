const express = require("express");
const app = express();
const path = require("path");
const cat_status = require("./routes/cat_status");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const nyakoPublicDir = path.join(__dirname, "..", "..", "nyako", "public");

// 選項 A：如果你希望在 URL 使用 /public/...
// 例如 http://localhost:4000/public/cat/SSR/black-01.png
app.use(
  "/public",
  express.static(nyakoPublicDir, {
    maxAge: "1d",
    index: false,
    dotfiles: "ignore",
  })
);

app.use("/api", cat_status);
module.exports = app;
