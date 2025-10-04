"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import Archive from "@/components/archive";
import FilterBar from "@/components/filterbar";
import CatInfo from "@/components/cat-info";
import Image from "next/image";
import Luna from "@/../public/cat/SSR/blue-01.png";
import EX from "@/../public/icon/icon.png";
import bg from "@/../public/background.png"


const FILTERS = ["EX", "R", "SR", "SSR", "UR"];

function Catselect() {
    const [filter, setFilter] = useState("");                 // ← 把 f 提升到父層
    const [data, setData] = useState([]);
    const onFilterChange = useCallback(setFilter, []);        // ← 往子層傳的回呼
    const [selected, setSelected] = useState(null);


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


    }, []); // ✅ 只在第一次掛載時執行一次

    const list = useMemo(
        () => (filter === "" ? data : data.filter(x => x.rare === filter)),
        [filter, data]
    );



    const oklist = useMemo(() => {
        const acc = {};
        for (const cur of list) {
            const key = cur.uid;
            if (!key) continue;

            const { ability, ...base } = cur; // 把 1:N 欄位排除，其餘淺拷貝
            if (!acc[key]) acc[key] = { ...base, abilities: [] };

            const ab = ability ?? abilityName ?? ability_name;
            if (ab && !acc[key].abilities.includes(ab)) acc[key].abilities.push(ab);
        }
        return Object.values(acc); // ← 最後才變回陣列
    }, [list]);



    // const combine = data.reduce((acc, cur) => {
    //     const key = cur.uid;                // ⬅️ 用 uid 當分組 key
    //     if (!key) {
    //         console.warn("缺 uid，這筆略過：", cur);
    //         return acc;
    //     }

    //     if (!acc[key]) {
    //         // 只在第一次遇到該 uid 時建立骨架（挑你需要的欄位）
    //         acc[key] = {
    //             uid: cur.uid,
    //             name: cur.name,                 // 若 cur 內有 name 就放；沒有可略
    //             rare: cur.rare,                 // 其他基礎欄位照放
    //             hp: cur.hp,
    //             atk: cur.atk,
    //             ats: cur.ats,
    //             dps: cur.dps,
    //             attack_range: cur.attack_range,
    //             startup: cur.startup,
    //             recovery: cur.recovery,
    //             kb: cur.kb,
    //             url: cur.url,
    //             movement_speed: cur.movement_speed,
    //             cost: cur.cost,
    //             re_cost: cur.re_cost,
    //             active: cur.active,
    //             intro: cur.intro,

    //             abilities: [],                  // 能力陣列
    //         };
    //     }



    //     // 決定「能力」欄位名稱（依你的實際資料欄位調整）
    //     const ability =
    //         cur.ability ?? cur.abilityName ?? cur.ability_name ?? null;

    //     if (ability) {
    //         // 可選：去重，避免重覆能力
    //         if (!acc[key].abilities.includes(ability)) {
    //             acc[key].abilities.push(ability);
    //         }
    //     }

    //     return acc;
    // }, {});

    //物件轉換陣列
    // const oklist = useMemo(() => Object.values(combine), [combine]);

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