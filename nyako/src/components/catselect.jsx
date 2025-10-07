"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Archive from "@/components/archive";
import FilterBar from "@/components/filterbar";
import CatInfo from "@/components/cat-info";
import bg from "@/../public/background.png"


const FILTERS = ["EX", "R", "SR", "SSR", "UR"];

function Catselect() {
    const [filter, setFilter] = useState("");                 // ← 把 f 提升到父層
    const [data, setData] = useState([]);
    const onFilterChange = useCallback(setFilter, []);        // ← 往子層傳的回呼
    const [selected, setSelected] = useState(null);



    const params = useParams();             // 讀取動態路由片段
    const router = useRouter();
    const urlUid = params?.uid ? String(params.uid) : ""; // 可能為 undefined












    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3005/api/cat_status", {
                });
                if (!res) return "資料庫未抓取"
                const rows = await res.json();

                // ✅ 就在這裡 setData
                setData(rows);

                // 若要先正規化，可改成：setData(rows.map(x => ({ uid: x.uid, photo: x.url, ... })));
            } catch (err) {
                if (err.name !== "AbortError") console.error(err);
            }
        })();


    }, []);

    const list = useMemo(
        () => (filter === "" ? data : data.filter(x => x.rare === filter)),
        [filter, data]
    );



    const oklist = useMemo(() => {
        const acc = {};
        for (const cur of list) {
            const key = cur.uid;
            if (!key) continue;

            const { ability, ability_url, ...base } = cur; // 把 1:N 欄位排除，其餘淺拷貝
            if (!acc[key]) acc[key] = { ...base, abilities: [], abilities_url: [] };

            const ab = ability ?? abilityName ?? ability_name;
            if (ab && !acc[key].abilities.includes(ab)) acc[key].abilities.push(ab);
            const url = ability_url;
            if (url && !acc[key].abilities_url.includes(url)) acc[key].abilities_url.push(url);
        }
        return Object.values(acc); // ← 最後才變回陣列
    }, [list]);




    useEffect(() => {
        // 當沒有 uid（在 /cat 頁面）就清空選取
        if (!urlUid) {
            setSelected(null);
            return;
        }
        // 有 uid：在 oklist 找到對應的角色
        const match = oklist.find(x => String(x.uid) === urlUid) || null;
        setSelected(match);
    }, [urlUid, oklist]);




    useEffect(() => {
        console.log("list抓取到的資料", list)
    }, [list]);




    useEffect(() => {
        console.log("oklist抓取到的資料", oklist)
    }, [oklist]);









    return (
        <>
            <main className="flex flex-col items-center gap-14">
                <section className="relative flex w-full  h-[30svh] md:h-[400px] justify-center items-center p-8   md:px-8  md:py-16   " >

                    <div className="absolute inset-0 z-0 bg-repeat opacity-60" style={{ backgroundImage: `url(${bg.src})` }}>
                    </div>


                    <div className="w-full h-full    md:w-4/6 md:h-full px-10 py-5  z-10  bg-white ">
                        <Archive list={oklist} onSelect={setSelected} />
                    </div>
                </section>
                <FilterBar
                    options={FILTERS}
                    value={filter}
                    onChange={onFilterChange}
                    allLabel="全部"
                />
                {selected && <CatInfo data={{ list: selected }} />}
            </main>
        </>
    )
}
export default Catselect;