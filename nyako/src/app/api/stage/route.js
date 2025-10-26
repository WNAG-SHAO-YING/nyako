import { NextResponse } from "next/server";
import { exec } from "@/lib/db.js";

export async function GET(request) {
  let sql = `SELECT *  
                      FROM enemy
                      LEFT JOIN stage_info ON enemy.enemy_id = stage_info.enemy_id
                      LEFT JOIN stage ON  stage_info.stage_id = stage.stage_id
              `;
  try {
    const rows = await exec(sql); // 若 db.exec 是 async/Promise
    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
