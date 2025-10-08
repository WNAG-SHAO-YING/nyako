let express = require("express");
let router = express.Router();
let db = require("../db.js");

router.get("/stage", async function (req, res) {
  let sql = `SELECT *  
                      FROM enemy
                      LEFT JOIN stage_info ON enemy.enemy_id = stage_info.enemy_id
                      LEFT JOIN stage ON  stage_info.stage_id = stage.stage_id
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
