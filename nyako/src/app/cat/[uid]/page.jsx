"use client"
import { useCatData } from "@/components/cat-data";
import CatInfo from "@/components/cat-info";
import { useMemo, use } from "react";




export default function Page({ params }) {
    const list = useCatData();
    const resolved = use(params);
    const uid = resolved.uid;
    let cat = useMemo(() => list.find(x => x.uid === uid) ?? null, [list, uid])
    return <CatInfo data={{ list: cat }} />;
}

