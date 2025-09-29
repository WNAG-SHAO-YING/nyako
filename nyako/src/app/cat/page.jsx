"use client";
import { useState, useMemo, useCallback } from "react";
import Archive from "@/components/archive";
import FilterBar from "@/components/filterbar";
import CatInfo from "@/components/cat-info";
import Image from "next/image";
import Luna from "@/../public/cat/SSR/blue-01.png";
import EX from "@/../public/icon/icon.png";
import bg from "@/../public/background.png"

const DATA = [
    { photo: Luna, id: 1, lv: "SSR" },
    { photo: Luna, id: 2, lv: "R" },
    { photo: EX, id: 3, lv: "SSR" },
];
const FILTERS = ["EX", "R", "SR", "SSR", "UR"];


function Cat() {
    const [filter, setFilter] = useState("");                 // ← 把 f 提升到父層
    const onFilterChange = useCallback(setFilter, []);        // ← 往子層傳的回呼
    // 父層先算好要給 Archive 的清單（好處：Archive 更純粹）


    const list = useMemo(
        () => (filter === "" ? DATA : DATA.filter(x => x.lv === filter)),
        [filter]
    );
    return (
        <>
            <main className="flex flex-col items-center gap-14">
                <section className="relative flex w-full  h-[30svh] md:h-[400px] justify-center items-center p-8   md:px-8  md:py-16   " >

                    <div className="absolute inset-0 z-0 bg-repeat opacity-60" style={{ backgroundImage: `url(${bg.src})` }}>
                    </div>


                    <div className="w-full h-full    md:w-4/6 md:h-full px-10 py-5  z-10  bg-white ">
                        <Archive list={list} />
                    </div>
                </section>
                <FilterBar
                    options={FILTERS}
                    value={filter}
                    onChange={onFilterChange}
                    allLabel="全部"
                />
                <CatInfo />
            </main>
        </>
    )
}
export default Cat;