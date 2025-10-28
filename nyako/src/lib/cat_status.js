import "server-only";
import { exec } from "@/lib/db";

export async function getCat() {
  let sql = `SELECT *  
                      FROM cat_status 
                      LEFT JOIN series ON cat_status.uid = series.uid
                      LEFT JOIN abilitybridge ON series.uid = abilitybridge.uid
                      LEFT JOIN ability ON abilitybridge.abilityId = ability.abilityId
                      LEFT JOIN colorbridge ON series.uid = colorbridge.uid
                      LEFT JOIN colors ON colorbridge.color = colors.color
              `;
  const rows = await exec(sql);
  return rows;
}
