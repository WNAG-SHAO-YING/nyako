"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
// ✅ 新增：shadcn/ui
import { Card } from "@/components/ui/card";
import Link from "next/link";


const MotionCard = motion(Card);
export default function Archive({ list, onSelect }) {

    return (
        <>
            <div >
                {/* 透過父層傳進來的函式去執行，執行的資料會直接被記錄在父層的prop裡(selected) 就是把set... 的函式功能交給子元件使用 */}


                <motion.div
                    layout
                    transition={{
                        layout: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }} className="flex gap-4">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {list.map(item => {
                            return (
                                <Link key={item.uid} href={`/cat/${item.uid}`}>
                                    <MotionCard
                                        // 注意 key 要放在 MotionCard 上
                                        onClick={() => onSelect?.(item)}
                                        layout
                                        initial={{ opacity: 0, x: 50 }}   // 從右邊 50px + 隱藏
                                        animate={{ opacity: 1, x: 0 }}    // 回到原位
                                        exit={{ opacity: 0, x: -40 }}      // 離開時再往右邊
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                        className="relative w-[79px] h-[53px] md:w-[104px] md:h-[79px] overflow-hidden rounded-none">
                                        <Image src={`http://localhost:3005/public${item.url}`} fill sizes="max-width:104px max-height:79px" alt="藍眼" />
                                    </MotionCard>
                                </Link>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>






        </>
    )
}