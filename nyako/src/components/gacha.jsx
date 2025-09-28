"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

// ✅ 新增：shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// 可以把 shadcn 的 Card 變成可動畫的元件
const MotionCard = motion(Card);

const ALL = [
    { id: 1, name: "炎之劍士", attr: "火" },
    { id: 2, name: "海之巫女", attr: "水" },
    { id: 3, name: "森之射手", attr: "木" },
    { id: 4, name: "聖光騎士", attr: "光" },
    { id: 5, name: "暗影刺客", attr: "暗" },
    { id: 6, name: "熔岩魔像", attr: "火" },
    { id: 7, name: "冰霜法師", attr: "水" },
    { id: 8, name: "樹靈導師", attr: "木" },
];
const FILTERS = ["全部", "火", "水", "木", "光", "暗"];

export default function Characters() {
    const [f, setF] = useState("全部");
    const prefersReduce = useReducedMotion();//讀取使用者的系統偏好設定 「是否要減少動畫效果」

    const list = useMemo(
        () => (f === "全部" ? ALL : ALL.filter((x) => x.attr === f)),
        [f]
    );

    return (
        <div className="p-4 space-y-4">
            {/* 篩選列：改用 shadcn Button */}
            <div className="flex flex-wrap gap-2">
                {FILTERS.map((x) => (
                    <Button
                        key={x}
                        onClick={() => setF(x)}
                        variant={x === f ? "default" : "outline"}
                        size="sm"
                        className="rounded-xl"
                    >
                        {x}
                    </Button>
                ))}
            </div>

            {/* 容器 layout：讓容器高度變化有補間 */}
            <motion.div
                layout
                transition={{
                    layout: {
                        duration: prefersReduce ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
            >
                {/* AnimatePresence：離場動畫 */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {list.map((c) => (
                        <MotionCard
                            key={c.id} // 用穩定 id
                            layout
                            //scale 用來控制圖片大小，讓動畫過度平滑
                            initial={{ opacity: 0, scale: 0.95 }}  
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                layout: { type: "spring", bounce: 0.15, duration: 0.25 },
                                duration: prefersReduce ? 0 : 0.22,
                            }}
                            className="rounded-2xl"
                        >
                            <CardHeader className="p-3 pb-2">
                                <CardTitle className="text-base">{c.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-3 pt-0">
                                <div className="aspect-square rounded-xl bg-gray-100 mb-2" />
                                <div className="text-sm text-muted-foreground">{c.attr}</div>
                            </CardContent>
                        </MotionCard>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}