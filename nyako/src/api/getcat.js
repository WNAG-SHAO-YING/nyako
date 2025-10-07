import { useState, useEffect, useMemo } from "react";

export function Getcat() {
  let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3005/api/cat_status", {});
        if (!res) return "資料庫未抓取";
        const rows = await res.json();

        // ✅ 就在這裡 setData
        setData(rows);

        // 若要先正規化，可改成：setData(rows.map(x => ({ uid: x.uid, photo: x.url, ... })));
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    })();
  }, []);
  //   useEffect(() => {
  //     console.log("data抓取到的資料", data);
  //   }, [data]);
  const regex = /(blue|black|dragon)/i;
  let target = data.filter((x) => regex.test(x.uid));
  const oklist = useMemo(() => {
    const acc = {};
    for (const cur of target) {
      const key = cur.uid;
      if (!key) continue;

      const { ability, ability_url, ...base } = cur; // 把 1:N 欄位排除，其餘淺拷貝
      if (!acc[key]) acc[key] = { ...base, abilities: [], abilities_url: [] };

      const ab = ability ?? abilityName ?? ability_name;
      if (ab && !acc[key].abilities.includes(ab)) acc[key].abilities.push(ab);
      const url = ability_url;
      if (url && !acc[key].abilities_url.includes(url))
        acc[key].abilities_url.push(url);
    }
    return Object.values(acc); // ← 最後才變回陣列
  }, [target]);

  useEffect(() => {
    console.log("oklist抓取到的資料", oklist);
  }, [oklist]);
  return { oklist };
}
