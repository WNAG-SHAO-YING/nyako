"use client"
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
function Stage() {
    let [data, setData] = useState(null);
    const { stage_id } = useParams();
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3005/api/stage", {
                });
                if (!res) return "資料庫未抓取"
                const rows = await res.json();
                setData(rows);
            } catch (err) {
                if (err.name !== "AbortError") console.error(err);
            }
        })()
    }, [])


    const list = useMemo(() => {
        if (!Array.isArray(data)) return [];

        const byStage = new Map();

        for (const row of data) {
            const sid = row.stage_id;
            if (!sid) continue;

            // 第一次遇到這個 stage 時初始化
            if (!byStage.has(sid)) {
                const {
                    enemy_id, enemy_name, url, hp, quantity, attribute, // 這些是 1:N 的欄位，先從基底剔除
                    ...stageBase
                } = row;

                byStage.set(sid, {
                    ...stageBase,          // 例如 stage_id, stage_name, reward, tower_hp_factor, ...
                    stage_id: sid,
                    enemies: [],           // 最終要的陣列
                    _seen: new Set(),      // 內部用來去重
                });
            }

            const rec = byStage.get(sid);


            const enemyKey = row.enemy_id;
            if (enemyKey && !rec._seen.has(enemyKey)) {
                rec._seen.add(enemyKey);
                rec.enemies.push({
                    enemy_id: row.enemy_id,
                    enemy_name: row.enemy_name,
                    hp: row.hp,
                    quantity: row.quantity,
                    attribute: row.attribute,
                    url: row.url,

                });
            }
        }

        // 把內部用的 _seen 拿掉再回傳
        return Array.from(byStage.values()).map(({ _seen, ...rest }) => rest);
    }, [data]);
    useEffect(() => {
        console.log(list)
    }, [list])

    let tran = list.find(x => (x.stage_id === stage_id))
    let oklist = tran ? [tran] : [];
    useEffect(() => {
        console.log("這是oklist", oklist)
        console.log(typeof oklist)
    }, [oklist])

    const cat = oklist[0]?.reward;
    const rewardUrl = oklist[0]?.reward_url;
    const text = "text-xl md:text-2xl"
    const grid = "grid grid-cols-5 h-[5vh]"
    const layout = "text-center items-center"
    const flex = "flex flex-col"

    return (
        <main className={`${flex}`}>
            <div className={`${flex} ${text} items-center gap-16 my-24`}>
                <div className="bg-myyellow">
                    關卡名稱:{oklist[0]?.stage_name}
                </div>
                <div>
                    通關獎勵{rewardUrl && <Link href={`/cat/${cat}`}><Image src={rewardUrl} width={104} height={79} alt="通關獎勵" /></Link>}
                </div>
            </div>
            <section className={`${flex}`}>
                <div className={`${grid} ${text} ${layout} bg-myyellow`}>
                    <div>敵人</div>
                    <div>名稱</div>
                    <div>倍率</div>
                    <div>出現數</div>
                    <div>塔連動</div>
                </div>

                {
                    oklist.map((stage, i) => {
                        return (

                            <div key={i}>

                                {
                                    stage.enemies.map((enemy, j) => {
                                        return (
                                            <div className={`${grid} ${layout} text-xl gap-2 md:text-2xl `} key={j}>
                                                <div className="flex justify-center">
                                                    <Image src={enemy.url} width={64} height={64} alt="dog" />
                                                </div>
                                                <div>{enemy.enemy_name}</div>
                                                <div>{stage.multiplier}%</div>
                                                <div>{enemy.quantity}</div>
                                                <div>{stage.tower_hp_factor}%</div>
                                            </div>

                                        )
                                    })
                                }



                            </div>
                        )
                    })}
            </section>
        </main>
    )
}
export default Stage;