import Image from "next/image";

export default function Header() {
    return (
        <header className="
        fixed bottom-0 w-full
        md:fixed md:top-0 
        grid grid-cols-3 items-center 
          bg-orange-200  ">
            <Image src="/icon/icon.png" width={60} height={60} priority alt="icon" />
            <div className="grid grid-cols-4  gap-3">
                <span className="text-3xl ">首頁</span>
                <span className="text-3xl ">圖鑑</span>
                <span className="text-3xl ">轉蛋</span>
                <span className="text-3xl ">關卡</span>
            </div>
            <div></div>
        </header>
    )
}
