"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function StageList() {
    let flip = "absolute flex [backface-visibility:hidden] transition-transform duration-500 "
    return (
        <main className="flex flex-col  items-center gap-6">
            <Link href={'/stage/island'}>
                <section className="group relative w-svw max-w-[960px]  aspect-[2/1] [perspective:1000px] [transform-style:preserve-3d]"
                >
                    <div className={`${flip} [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]`}>

                        <Image src="/event/island.jpg" width={960} height={480} alt="island" />

                    </div>
                    <div className={`${flip} justify-center items-center t-0 r-0 w-full h-full
                whitespace-pre-line text-center  
                [font-size:4cqw] md:text-2xl   
                [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] bg-[url(/card.png)] `}>
                        {`一覺醒來，貓咪發現自己被沖上了神祕的荒島。
                    從暴風雨到洞窟的黑暗、從草叢裡詭異的視線到毒菇的陷阱，
                    每一步都是對膽量與肚皮的考驗！

                    為了活下去，牠學會了狩獵、採集、造筏與與自然為伍，
                    在孤獨與冒險中找到「生存」的意義。
                    然而當木筏啟航、海浪再度翻騰，貓咪才發現——
                    真正的冒險，或許才正要開始。`}
                    </div>
                </section>
            </Link>
            <Link href={'/stage/summer'}>
                <section className="group relative w-svw max-w-[960px]  aspect-[2/1] [perspective:1000px] [transform-style:preserve-3d]"
                >
                    <div className={`${flip} [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]`}>

                        <Image src="/event/summer.jpg" width={960} height={480} alt="summer" />

                    </div>
                    <div className={`${flip} justify-center items-center t-0 r-0 w-full h-full
                whitespace-pre-line text-center  
                [font-size:4cqw] md:text-2xl   
                [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] bg-[url(/card.png)] `}>
                        {`暑假來臨，貓咪們迎來屬於自己的奇幻假期！
                          從晨光微曦的海邊到蟲鳴回蕩的夜晚，
                          牠們築基地、抓昆蟲、泡海水、追煙火，
                          每一天都像是一場充滿笑聲與驚奇的冒險。

                          然而在歡樂的夏日裡，也藏著一點點神祕的氣息——
                          試膽的夜裡友人離奇消失、不思議小姐的身影若隱若現……
                          當秋意漸起、煙火落幕，
                          貓咪才驚覺——暑假要結束了，作業卻還沒寫！

                          一場從「樹上基地」到「寫不完作業」的貓咪夏日冒險，
                          準備好一起迎接這場青春又混亂的暑假物語吧！`}
                    </div>
                </section>
            </Link>
            <Link href={'/stage/vacation'}>
                <section className="group relative w-svw max-w-[960px]  aspect-[2/1] [perspective:1000px] [transform-style:preserve-3d]"
                >
                    <div className={`${flip} [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]`}>

                        <Image src="/event/vacation.jpg" width={960} height={480} alt="vacation" />

                    </div>
                    <div className={`${flip} justify-center items-center t-0 r-0 w-full h-full
                whitespace-pre-line text-center  
                [font-size:4cqw] md:text-2xl   
                [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] bg-[url(/card.png)] `}>
                        {`為了打造全宇宙最棒的貓咪渡假村，
                          工程如火如荼展開！
                          從開發計畫到豪華設施、從笑容宣傳到VIP接待，
                          一切都看似完美無缺。

                          然而，歡笑背後的帳本開始歪斜，
                          假帳傳聞、負評風暴、內幕外洩……
                          理想中的天堂逐漸崩壞成廢墟。
                          但貓咪們沒有放棄——
                          重整旗鼓、回歸初心，
                          真正的「笑容樂園」或許，才正要誕生。`}
                    </div>
                </section>
            </Link>
        </main>
    )
}
export default StageList;