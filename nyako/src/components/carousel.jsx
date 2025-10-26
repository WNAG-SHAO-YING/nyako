"use client";
import Image from "next/image";
import { useState } from "react";
export default function Carousel({ images = [] }) {
    //測試
    let [slider, setSlider] = useState(0);
    let figure = "relative flex-none w-svw h-auto";
    let img = "md:w-full h-full  object-cover"

    return (
        <>
            <div className="relative overflow-hidden w-full aspect-[2/1] md:aspect-[2/1]">
                <div className="flex w-full h-full transition-transform duration-500"
                    style={{ transform: `translateX(-${slider * 100}svw)` }}>
                    {images.map((items, i) => {
                        return (
                            <figure className={`${figure}`} key={i}>
                                <Image src={items.src} width={960} height={480} alt="首頁輪播圖" className={`${img}`} />
                            </figure>
                        )
                    })}
















                    {/* <figure className={`${figure}`}>
                        <Image src="/banner-01.png" width={960} height={480} alt="banner-01" className={`${img}`} />
                    </figure>
                    <figure className={`${figure}`}>
                        <Image src="/banner-02.jpg" width={960} height={480} alt="banner-02" className={`${img}`} />
                    </figure>
                    <figure className={`${figure}`}>
                        <Image src="/banner-03.jpg" width={960} height={480} alt="banner-03" className={`${img}`} />
                    </figure>
                    <figure className={`${figure}`}>
                        <Image src="/banner-04.jpg" width={960} height={480} alt="banner-04" className={`${img}`} />
                    </figure> */}
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, 1, 2, 3].map((i) => (
                        <button
                            key={i}
                            onClick={() => setSlider(i)}
                            className={`w-4 h-4 rounded-full ${slider === i ? "bg-white" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    )
}
