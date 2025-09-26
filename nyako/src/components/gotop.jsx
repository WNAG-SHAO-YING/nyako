"use client";
import Luna from "../../public/cat/SSR/Luna.png"
import Image from "next/image"
export default function GOtop() {
    const handleGoTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 直接捲到最上面
    };
    return (
        <button onClick={handleGoTop} className="fixed right-0 bottom-28 md:bottom-0">
            <Image src={Luna} width={200} height={197} className="w-24 h-20  md:w-[200px] md:h-[180px] " alt="回到首頁" />
        </button>

    )
}