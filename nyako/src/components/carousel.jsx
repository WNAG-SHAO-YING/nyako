"use client";
import Image from "next/image";
import { useState } from "react";
export default function Carousel() {
    //測試
    let [slider, setSlider] = useState(0)
    return (
        <>
            <div className="relative overflow-hidden w-full aspect-[2/1] md:aspect-[2/1]">
                <div className="flex w-full h-full transition-transform duration-500"
                    style={{ transform: `translateX(-${slider * 100}svw)` }}>
                    <figure className="relative flex-none w-svw h-auto">
                        <Image src="/banner-01.png" width={960} height={480} alt="banner-01" className="md:w-full h-full  object-cover" />
                    </figure>
                    <figure className="relative flex-none w-svw h-auto">
                        <Image src="/banner-02.jpg" width={960} height={480} alt="banner-02" className="md:w-full h-full  object-cover" />
                    </figure>
                    <figure className="relative flex-none w-svw h-auto">
                        <Image src="/banner-03.jpg" width={960} height={480} alt="banner-03" className="md:w-full h-full  object-cover" />
                    </figure>
                    <figure className="relative flex-none w-svw h-auto">
                        <Image src="/banner-04.jpg" width={960} height={480} alt="banner-04" className="md:w-full h-full  object-cover " />
                    </figure>
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
