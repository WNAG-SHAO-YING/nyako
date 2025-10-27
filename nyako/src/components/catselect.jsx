"use client";
import { useState, useMemo, useCallback, useEffect, Children } from "react";
import { useParams, useRouter } from "next/navigation";
import Archive from "@/components/archive";
import FilterBar from "@/components/filterbar";
import CatInfo from "@/components/cat-info";
import bg from "@/../public/background.png"


const FILTERS = ["EX", "R", "SR", "SSR", "UR"];

function Catselect({ data = [], children }) {
    const [filter, setFilter] = useState("");                 // ← 把 f 提升到父層

    // ← 往子層傳的回呼
    const [selected, setSelected] = useState(null);



    const params = useParams();             // 讀取動態路由片段

    const urlUid = params?.uid ? String(params.uid) : ""; // 可能為 undefined






    const filtered = useMemo(() => {
        if (filter === "") return data;
        return data.filter(x => x.rare === filter);
    }, [data, filter]);

    useEffect(() => {
        // 當沒有 uid（在 /cat 頁面）就清空選取
        if (!urlUid) {
            setSelected(null);
            return;
        }
        // 有 uid：在 oklist 找到對應的角色
        const match = data.find(x => String(x.uid) === urlUid) || null;
        setSelected(match);
    }, [urlUid, data]);


    return (
        <>
            <main className="flex flex-col items-center gap-14">
                <section className="relative flex w-full  h-[30svh] md:h-[400px] justify-center items-center p-8   md:px-8  md:py-16   " >

                    <div className="absolute inset-0 z-0 bg-repeat opacity-60" style={{ backgroundImage: `url(${bg.src})` }}>
                    </div>


                    <div className="w-full h-full    md:w-4/6 md:h-full px-10 py-5  z-10  bg-white ">
                        <Archive list={filtered} onSelect={setSelected} />
                    </div>
                </section>
                <FilterBar
                    options={FILTERS}
                    value={filter}
                    onChange={setFilter}
                    allLabel="全部"
                />
                {children}
                {/* {selected && <CatInfo data={{ list: selected }} />} */}
            </main>
        </>
    )
}
export default Catselect;