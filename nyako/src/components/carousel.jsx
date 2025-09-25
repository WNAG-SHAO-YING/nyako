"use client";
import Image from "next/image";
import { useState } from "react";
// export default function Carousel() {
//     let [slider, setSlider] = useState(0)
//     return (
//         <>
//             <div className="relative overflow-hidden w-svw h-svh">
//                 <div className="flex transition-transform duration-500"
//                     style={{ transform: `translateX(-${slider * 100}svw)` }}>
//                     <figure className="relative flex-none w-svw h-svh">
//                         <Image src="/banner-01.png" fill alt="banner-01"  className="object-cover"/>
//                     </figure>
//                     <figure className="relative flex-none w-svw h-svh">
//                         <Image src="/banner-02.jpg" fill alt="banner-02" className="object-cover" />
//                     </figure>
//                     <figure className="relative flex-none w-svw h-svh">
//                         <Image src="/banner-03.jpg" fill alt="banner-03" className="object-cover" />
//                     </figure>
//                     <figure className="relative flex-none w-svw h-svh">
//                         <Image src="/banner-04.jpg" fill alt="banner-04"  className="object-cover "/>
//                     </figure>
//                 </div>
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//                     {[0, 1, 2, 3].map((i) => (
//                         <button
//                             key={i}
//                             onClick={() => setSlider(i)}
//                             className={`w-4 h-4 rounded-full ${slider === i ? "bg-white" : "bg-gray-400"
//                                 }`}
//                         ></button>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }
export default function Carousel() {
    const [slider, setSlider] = useState(0);
    const banners = ["/banner-01.png", "/banner-02.jpg", "/banner-03.jpg", "/banner-04.jpg"];

    return (


        <div className="relative overflow-hidden w-full aspect-[9/16] md:aspect-[16/9] lg:h-dvh">
            <div
                className="flex h-full transition-transform duration-500 will-change-transform"
                style={{ transform: `translate3d(-${slider * 100}%, 0, 0)` }}
            >
                {banners.map((src, i) => (
                    <figure key={i} className="relative w-full h-full shrink-0">
                        <Image
                            src={src}
                            alt={`banner-${i + 1}`}
                            fill
                            className="object-contain object-top md:object-cover"
                            sizes="(min-width: 768px) 100vw, 100vw"
                            quality={85}
                            priority={i === 0}
                        />
                    </figure>
                ))}
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                    <button
                        key={i}
                        onClick={() => setSlider(i)}
                        className={`w-4 h-4 rounded-full ${slider === i ? "bg-white" : "bg-gray-400/70"}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>

    );
}

