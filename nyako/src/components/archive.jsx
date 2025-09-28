"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
// ✅ 新增：shadcn/ui
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";


const MotionCard = motion(Card);
export default function Archive({ list }) {

    return (
        <>
            <motion.div
                layout
                transition={{
                    layout: {
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }} className="flex gap-4">
                <AnimatePresence mode="popLayout" initial={false}>
                    {list.map(img => {
                        return (
                            <MotionCard
                                key={img.id} // 注意 key 要放在 MotionCard 上
                                layout
                                initial={{ opacity: 0, x: 50 }}   // 從右邊 50px + 隱藏
                                animate={{ opacity: 1, x: 0 }}    // 回到原位
                                exit={{ opacity: 0, x: -50 }}      // 離開時再往右邊
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                }}
                                className="relative w-[104px] h-[79px] overflow-hidden rounded-none">
                                <Image src={img.photo} fill alt="藍眼" />
                            </MotionCard>
                        )
                    })}
                </AnimatePresence>
            </motion.div>






        </>
    )
}