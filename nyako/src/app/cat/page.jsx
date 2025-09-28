"use client";
import { useState, useMemo, useCallback } from "react";
import Archive from "@/components/archive";
import FilterBar from "@/components/filterbar";
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
            <section className="relative w-full h-[400px] p-16 ">

                <div
                    className="absolute bg-repeat  inset-0  opacity-60"
                    style={{ backgroundImage: `url(${bg.src})` }}
                />
                <Archive list={list} />
            </section>
            <FilterBar
                options={FILTERS}
                value={filter}
                onChange={onFilterChange}
                allLabel="全部"
            />
        </>
    )
}
export default Cat;