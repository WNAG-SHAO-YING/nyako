let express = require("express");
let router = express.Router();
let db = require("../db.js");

router.get("/cat_ability", async function (req, res) {
  let sql = `SELECT *  
                      FROM cat_status 
                      LEFT JOIN series ON cat_status.uid = series.uid
              `;
  try {
    const rows = await db.exec(sql); // 若 db.exec 是 async/Promise
    res.json(rows);
  } catch (err) {
    console.error("DB error:", err);
    next(err); // 交給 express 的錯誤中介層處理（或用 res.status(500).json(...)）
  }
});

module.exports = router;
