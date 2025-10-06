"use client"
import Image from "next/image";
import Luna from "@/../public/cat/SSR/blue-01.png"
function CatInfo({ data }) {
    console.log("這是角色要的資料", data)
    const item = data.list;
    if (!item) {
        return <div className="p-4">資料載入中… ⏳</div>;
    }
    return (
        <>

            <div className=" aspect-[6/5] w-3/4  md:w-1/3 bg-white" >
                <div className="grid grid-rows-6 h-1/2   ">
                    <div className="row-span-1 grid grid-cols-9  h-full outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 flex h-full items-center justify-center bg-myyellow"></div>
                        <div className="col-span-4 flex h-full items-center justify-start pl-11">{item.name} </div>
                        <div className="col-span-4 flex h-full items-center justify-center">稀有度:{item.rare}</div>
                    </div>
                    <div className="row-span-3 grid grid-cols-3  outline   outline-4 outline-lightbg">
                        <div className="col-span-1  flex ">
                            <div className="flex-[1] bg-myyellow  text-xs md:text-xl">
                                屬性欄位
                            </div>
                            <div className="relative flex-[2] flex  box-border  justify-center items-center">
                                <Image src={item.url} width={104} height={79} className="object-contain" alt={item.uid} />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col  ">
                            <div className="flex flex-1 outline   outline-4 outline-lightbg">
                                <div className="flex-[1] bg-myyellow  text-xs md:text-xl">
                                    體力
                                </div>
                                <div className="flex-[2] grid place-items-center  ">
                                    {item.hp}
                                </div>
                            </div>
                            <div className="flex flex-1 outline   outline-4 outline-lightbg" >
                                <div className="flex-[1] bg-myyellow text-xs md:text-xl">
                                    攻擊力
                                </div>
                                <div className="flex-[2] grid place-items-center">
                                    {item.atk}
                                </div>
                            </div>
                            <div className="flex flex-1 outline   outline-4 outline-lightbg">
                                <div className="flex-[1] bg-myyellow text-xs md:text-xl">
                                    DPS
                                </div>
                                <div className="flex-[2] grid place-items-center">
                                    {item.dps}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex  flex-col">

                            <div className="flex flex-1 outline   outline-4 outline-lightbg">
                                <div className="flex-[1] bg-myyellow text-xs md:text-xl">
                                    KB
                                </div>
                                <div className="flex-[2] grid place-items-center">
                                    {item.kb}
                                </div>
                            </div>
                            <div className="flex flex-1 outline   outline-4 outline-lightbg">
                                <div className="flex-[1] bg-myyellow text-xs md:text-xl">
                                    速度
                                </div>
                                <div className="flex-[2] grid place-items-center">
                                    {item.movement_speed}
                                </div>
                            </div>
                            <div className="flex flex-1 outline   outline-4 outline-lightbg">
                                <div className="flex-[1] bg-myyellow text-xs md:text-xl">
                                    射程
                                </div>
                                <div className="flex-[2] grid place-items-center">
                                    {item.attack_range}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">生產金額</div>
                        <div className="col-span-2 grid place-items-center">{item.cost}</div>
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">攻擊頻率</div>
                        <div className="col-span-2 grid place-items-center">{item.ats?.toFixed(1)}s</div>
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">攻擊前搖</div>
                        <div className="col-span-2 grid place-items-center">{item.startup?.toFixed(1)}s</div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">再生產</div>
                        <div className="col-span-2 grid place-items-center">{item.re_cost?.toFixed(1)}S</div>
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">攻擊間隔</div>
                        <div className="col-span-2 grid place-items-center">{item.active?.toFixed(1)}</div>
                        <div className="col-span-1 bg-myyellow text-xs md:text-xl">攻擊後搖</div>
                        <div className="col-span-2 grid place-items-center">{item.recovery?.toFixed(1)}s</div>
                    </div>
                </div>
                {/* 下半 */}
                <div className="grid grid-rows-2 h-1/2 outline   outline-4 outline-lightbg ">
                    <div className="row-span-1 flex flex-row h-full">
                        <div className="flex-[1] bg-myyellow text-xs md:text-xl">特性</div>
                        <div className="flex-[8] flex justify-center items-center gap-2">
                            {
                                item.abilities_url.map(function (url, id) {
                                    return (
                                        <Image src={url} width={40} height={40} alt="能力" key={id} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="row-span-1 flex flex-row h-full outline   outline-4 outline-lightbg">
                        <div className="flex-[1] bg-myyellow text-xs md:text-xl">說明</div>
                        <div className="flex-[8] flex justify-center items-center whitespace-pre-line text-center">
                            {item.intro}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default CatInfo;