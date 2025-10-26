import { NextResponse } from "next/server";
import { exec } from "@/lib/db.js";

export async function GET(request) {
  let sql = `SELECT *  
                      FROM cat_status 
                      LEFT JOIN series ON cat_status.uid = series.uid
                      LEFT JOIN abilitybridge ON series.uid = abilitybridge.uid
                      LEFT JOIN ability ON abilitybridge.abilityId = ability.abilityId
                      LEFT JOIN colorbridge ON series.uid = colorbridge.uid
                      LEFT JOIN colors ON colorbridge.color = colors.color
              `;
  try {
    const rows = await exec(sql);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
