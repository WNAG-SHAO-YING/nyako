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
    return (
        <>
            <main className="flex flex-col items-center gap-14">
                <section className="relative flex w-full  h-[30svh] md:h-[400px] justify-center items-center p-8   md:px-8  md:py-16   " >

                    <div className="absolute inset-0 z-0 bg-repeat opacity-60" style={{ backgroundImage: `url(${bg.src})` }}>
                    </div>


                    <div className="w-full h-full    md:w-4/6 md:h-full px-10 py-5  z-10  bg-white ">
                        <Archive list={list} onSelect={setSelected} />
                    </div>
                </section>
                <FilterBar
                    options={FILTERS}
                    value={filter}
                    onChange={onFilterChange}
                    allLabel="全部"
                />
                {selected && <CatInfo data={{ list: data }} />}
            </main>
        </>
    )
}
export default Catselect;