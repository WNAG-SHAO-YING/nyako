"use client"
import Image from "next/image";
import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


let photo = [{ img: "/gacha/black.png", id: "black" },
{ img: "/gacha/blue.png", id: "blue" },
{ img: "/gacha/dragon.png", id: "dragon" }]

export function GachaPhone() {
    let [current, setCurrent] = useState(0);
    let [data, setData] = useState([]);
    const next = () => setCurrent(p => (p + 1) % photo.length);
    const back = () => setCurrent(p => (p - 1 + photo.length) % photo.length);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3005/api/cat_status", {});
                if (!res) return "資料庫未抓取";
                const rows = await res.json();


                setData(rows);


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




    const ordered = useMemo(() => {
        const n = photo.length;
        return [0, 1, 2].map(i => photo[(current + i) % n]);
        //current的值每次+1都會讓陣列的第一個數值改變     photo[   序號根據current改變   ]
    }, [current, photo]);
    const slots = [
        { x: -180, scale: 1, rotateY: 18, z: 1, opacity: 0.9 },
        { x: 0, scale: 1.3, rotateY: 0, z: 10, opacity: 1 }, // 中間
        { x: 180, scale: 1, rotateY: -18, z: 1, opacity: 0.9 },
    ];
    const centerItem = ordered[1];









    const showcat = useMemo(() => {
        if (!centerItem) return [];
        return oklist.filter(c => c.uid.includes(centerItem.id));
    }, [centerItem, oklist]);
    console.log("showcat是", showcat)




    return (
        <>
            <div className="flex flex-col items-center md:hidden ">
                <div className="relative flex    w-[100vw] max-w-[535px]  h-[20vh] overflow-hidden ">
                    <motion.div
                        className="flex w-full h-full"
                        animate={{ x: `-${current * 100}%` }}
                        transition={{
                            duration: 0.5,           // ← 動畫持續時間
                            ease: [0.22, 1, 0.36, 1] // ← 貝茲曲線（自然滑動感）
                        }}
                    >
                        {photo.map((item, i) => {
                            return (
                                <Image
                                    key={i}
                                    src={item.img}
                                    width={860}
                                    height={240}
                                    alt="gacha"
                                    className="object-contain w-full h-full"
                                />
                            )
                        })}
                    </motion.div>
                    <div className="absolute flex  justify-between w-full h-full    z-50">
                        <button onClick={back} className="z-50 text-[15vw] left-0  text-myyellow"> &lt; </button>
                        <button onClick={next} className="z-50 text-[15vw] right-0   text-myyellow"> &gt; </button>
                    </div>
                </div>
                <div className=" grid  gap-4 grid-cols-[repeat(auto-fit,minmax(50px,104px))]  justify-center w-[70vw] h-[300px] ">
                    {/* 圖片顯示區 */}

                    {showcat.map((item, i) => {

                        return (
                            <Link key={item.uid} href={`/cat/${item.uid}`}>
                                < Image src={item.url} width={80} height={60} alt="cat" key={i} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )

}







export function Gacha() {

    let [current, setCurrent] = useState(0);
    let [data, setData] = useState([]);
    const back = () => setCurrent(p => (p + 1) % photo.length);
    const next = () => setCurrent(p => (p - 1 + photo.length) % photo.length);


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




    const ordered = useMemo(() => {
        const n = photo.length;
        return [0, 1, 2].map(i => photo[(current + i) % n]);
        //current的值每次+1都會讓陣列的第一個數值改變     photo[   序號根據current改變   ]
    }, [current, photo]);
    const slots = [
        { x: -180, scale: 1, rotateY: 18, z: 1, opacity: 0.9 },
        { x: 0, scale: 1.3, rotateY: 0, z: 10, opacity: 1 }, // 中間
        { x: 180, scale: 1, rotateY: -18, z: 1, opacity: 0.9 },
    ];
    const centerItem = ordered[1];









    const showcat = useMemo(() => {
        if (!centerItem) return [];
        return oklist.filter(c => c.uid.includes(centerItem.id));
    }, [centerItem, oklist]);
    console.log("showcat是", showcat)

    return (
        <>
            <div className="hidden   md:grid  place-items-center">
                <div className="relative flex w-[70vw]  h-[20vh]  ">


                    {ordered.map((item, i) => {

                        return (
                            <motion.div className=" relative flex aspect-[7/2]  overflow-hidden    "
                                layout
                                animate={{
                                    scale: i === 1 ? 1.3 : 1,       // 放大第一張
                                    zIndex: i === 1 ? 10 : 1,
                                    x: slots.x,
                                    rotateY: slots.rotateY,
                                    // x: i === 0 ? -60 : i === 2 ? 60 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                }}
                                key={item.img}>
                                <Image src={item.img} width={860} height={240} alt={i} className="  shrink-0   object-contain"
                                />
                                {i === 0 && (
                                    <>
                                        <button
                                            onClick={back}
                                            className="absolute left-0 top-1/2 -translate-y-1/2  text-myyellow text-[4vw] w-10 h-10  flex items-center justify-center"
                                        >
                                            &lt;
                                        </button>

                                    </>
                                )}
                                {i === 2 && (
                                    <>
                                        <button
                                            onClick={next}
                                            className="absolute right-0 top-1/2 -translate-y-1/2  text-myyellow text-[4vw] w-10 h-10  flex items-center justify-center"
                                        >
                                            &gt;
                                        </button>

                                    </>
                                )}
                            </motion.div>
                        )
                    })
                    }
                </div>
                <div className=" grid  gap-4 grid-cols-[repeat(auto-fit,minmax(50px,104px))]  w-[70vw] h-[300px] ">
                    {/* 圖片顯示區 */}

                    {showcat.map((item, i) => {

                        return (
                            <Link key={item.uid} href={`/cat/${item.uid}`}>
                                < Image src={item.url} width={104} height={79} alt="cat" key={i} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
