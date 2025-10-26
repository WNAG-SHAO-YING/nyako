"use client"
import Image from "next/image";
import Luna from "@/../public/cat/SSR/blue-01.png"
function CatInfo({ data }) {
    console.log("這是角色要的資料", data)
    const item = data.list;
    const flex1 = "flex flex-1 outline   outline-4 outline-lightbg"
    const flex2 = "flex-[2] grid place-items-center"
    const text = "flex-[1] bg-myyellow text-xs md:text-xl"
    const text2 = "col-span-1 bg-myyellow text-xs md:text-xl"
    const text3 = "col-span-2 grid place-items-center"
    const center = "justify-center items-center"
    const flex = "flex h-full"
    if (!item) {
        return <div className="p-4">資料載入中… ⏳</div>;
    }
    return (
        <>

            <div className=" aspect-[6/5] w-3/4  md:w-1/3 bg-white" >
                <div className="grid grid-rows-6 h-1/2   ">
                    <div className="row-span-1 grid grid-cols-9  h-full outline   outline-4 outline-lightbg ">
                        <div className={`col-span-1 ${flex} ${center} bg-myyellow`}></div>
                        <div className={`col-span-4 ${flex} items-center justify-start pl-11`}>{item.name} </div>
                        <div className={`col-span-4 ${flex} ${center}`}>稀有度:{item.rare}</div>
                    </div>
                    <div className="row-span-3 grid grid-cols-3  outline   outline-4 outline-lightbg">
                        <div className="col-span-1  flex  ">
                            <div className={`flex-[1] bg-myyellow  text-xs md:text-xl place-content-center `}>
                                <div className={`grid grid-cols-2 gap-1 p-1 place-items-center`} >
                                    {item.colors_url.map(e => (
                                        <Image src={e} width={30} height={30} key={e} alt="屬性" />
                                    ))}
                                </div>
                            </div>
                            <div className={`relative flex-[2] flex  box-border  ${center}`}>
                                <Image src={item.url} width={104} height={79} className="object-contain" alt={item.uid} />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col  ">
                            <div className={`${flex1}`}>
                                <div className={`${text}`}>
                                    體力
                                </div>
                                <div className={`${flex2}`}>
                                    {item.hp}
                                </div>
                            </div>
                            <div className={`${flex1}`} >
                                <div className={`${text}`}>
                                    攻擊力
                                </div>
                                <div className={`${flex2}`}>
                                    {item.atk}
                                </div>
                            </div>
                            <div className={`${flex1}`}>
                                <div className={`${text}`}>
                                    DPS
                                </div>
                                <div className={`${flex2}`}>
                                    {item.dps}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex  flex-col">

                            <div className={`${flex1}`}>
                                <div className={`${text}`}>
                                    KB
                                </div>
                                <div className={`${flex2}`}>
                                    {item.kb}
                                </div>
                            </div>
                            <div className={`${flex1}`}>
                                <div className={`${text}`}>
                                    速度
                                </div>
                                <div className={`${flex2}`}>
                                    {item.movement_speed}
                                </div>
                            </div>
                            <div className={`${flex1}`}>
                                <div className={`${text}`}>
                                    射程
                                </div>
                                <div className={`${flex2}`}>
                                    {item.attack_range}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className={`${text2}`}>生產金額</div>
                        <div className={`${text3}`}>{item.cost}</div>
                        <div className={`${text2}`}>攻擊頻率</div>
                        <div className={`${text3}`}>{item.ats?.toFixed(1)}s</div>
                        <div className={`${text2}`}>攻擊前搖</div>
                        <div className={`${text3}`}>{item.startup?.toFixed(1)}s</div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className={`${text2}`}>再生產</div>
                        <div className={`${text3}`}>{item.re_cost?.toFixed(1)}S</div>
                        <div className={`${text2}`}>攻擊間隔</div>
                        <div className={`${text3}`}>{item.active?.toFixed(1)}</div>
                        <div className={`${text2}`}>攻擊後搖</div>
                        <div className={`${text3}`}>{item.recovery?.toFixed(1)}s</div>
                    </div>
                </div>
                {/* 下半 */}
                <div className="grid grid-rows-2 h-1/2 outline   outline-4 outline-lightbg ">
                    <div className={`row-span-1  flex-row ${flex}`}>
                        <div className={`${text}`}>特性</div>
                        <div className={`flex-[8] flex ${center} gap-2`}>
                            {
                                item.abilities_url.map(function (url, id) {
                                    return (
                                        <Image src={url} width={40} height={40} alt="能力" key={id} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={`row-span-1 ${flex} flex-row  outline   outline-4 outline-lightbg`}>
                        <div className={`${text}`}>說明</div>
                        <div className={`flex-[8] flex ${center} whitespace-pre-line text-center`}>
                            {item.intro}
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}


export default CatInfo;