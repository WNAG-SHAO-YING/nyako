"use client"
import Image from "next/image";
import Luna from "@/../public/cat/SSR/blue-01.png"
function CatInfo() {

    return (
        <>
            <div className=" aspect-[6/5] w-3/4  md:w-1/3 bg-white" >
                <div className="grid grid-rows-6 h-1/2   ">
                    <div className="row-span-1 grid grid-cols-9  h-full outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 flex h-full items-center justify-center bg-myyellow">uid</div>
                        <div className="col-span-4 flex h-full items-center justify-start pl-11">角色名稱</div>
                        <div className="col-span-4 flex h-full items-center justify-center">稀有度</div>
                    </div>
                    <div className="row-span-3 grid grid-cols-3  outline   outline-4 outline-lightbg">
                        <div className="col-span-1  flex ">
                            <div className="flex-[1] bg-myyellow">
                                屬性欄位
                            </div>
                            <div className="relative flex-[2] flex  box-border  justify-center items-center">
                                <Image src={Luna} width={104} height={79} className="object-contain" alt="測試" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col  ">
                            <div className="flex flex-1 ">
                                <div className="flex-[1] bg-myyellow">
                                    體力
                                </div>
                                <div className="flex-[2] ">
                                    100
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-[1] bg-myyellow">
                                    攻擊力
                                </div>
                                <div className="flex-[2]">
                                    20
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-[1] bg-myyellow">
                                    DPS
                                </div>
                                <div className="flex-[2]">
                                    10
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex  flex-col">

                            <div className="flex flex-1">
                                <div className="flex-[1] bg-myyellow">
                                    KB
                                </div>
                                <div className="flex-[2]">
                                    10
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-[1] bg-myyellow">
                                    速度
                                </div>
                                <div className="flex-[2]">
                                    10
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-[1] bg-myyellow">
                                    射程
                                </div>
                                <div className="flex-[2]">
                                    400
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 bg-myyellow">生產金額</div>
                        <div className="col-span-2">1000</div>
                        <div className="col-span-1 bg-myyellow">攻擊頻率</div>
                        <div className="col-span-2">10s</div>
                        <div className="col-span-1 bg-myyellow">攻擊前搖</div>
                        <div className="col-span-2">1s</div>
                    </div>
                    <div className="row-span-1 grid grid-cols-9 outline   outline-4 outline-lightbg ">
                        <div className="col-span-1 bg-myyellow">再生產</div>
                        <div className="col-span-2">100S</div>
                        <div className="col-span-1 bg-myyellow">攻擊間隔</div>
                        <div className="col-span-2">0</div>
                        <div className="col-span-1 bg-myyellow">攻擊後搖</div>
                        <div className="col-span-2">1s</div>
                    </div>
                </div>
                {/* 下半 */}
                <div className="grid grid-rows-2 h-1/2 outline   outline-4 outline-lightbg ">
                    <div className="row-span-1 flex flex-row h-full">
                        <div className="flex-[1] bg-myyellow">特性</div>
                        <div className="flex-[8] flex justify-center items-center">
                            特性圖片
                        </div>
                    </div>
                    <div className="row-span-1 flex flex-row h-full outline   outline-4 outline-lightbg">
                        <div className="flex-[1] bg-myyellow">說明</div>
                        <div className="flex-[8] flex justify-center items-center">
                            角色說明
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default CatInfo;