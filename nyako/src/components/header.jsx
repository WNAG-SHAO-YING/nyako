import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const layout = "flex flex-col items-center"
  return (
    <>
      <header id="header" className="
                  hidden md:grid grid-cols-3 items-center sticky 
                  w-full  h-24 top-0 md:bottom-auto z-50
                   bg-white
    ">
        <Image src="/icon/icon.png" width="60" height="60" priority alt="icon" />
        <div className="grid grid-cols-4  gap-3">
          <Link href="/">
            <span className="text-3xl ">首頁</span>
          </Link>
          <Link href="/cat">
            <span className="text-3xl ">圖鑑</span>
          </Link>
          <Link href="/gacha">
            <span className="text-3xl ">轉蛋</span>
          </Link>
          <Link href="/stage">
            <span className="text-3xl ">關卡</span>
          </Link>
        </div>
        <div></div>
      </header>
      <header className=" md:hidden
        grid grid-cols-4  fixed bottom-0 w-full h-30 p-2
            bg-orange-100
            z-50">
        <Link href="/">
          <div className={`${layout}`}>
            <Image src="/icon/icon.png" className='block shrink-0 w-[48px] h-[48px]' width={48} height={48} priority alt="icon" />
            <span className="text-3xl ">首頁</span>
          </div>
        </Link>
        <Link href="/cat">
          <div className={`${layout}`}>
            <Image src="/cat-library.png" width={60} height={60} priority alt="library" className="w-[48px] h-[48px]" />
            <span className="text-3xl ">圖鑑</span>
          </div>
        </Link>
        <Link href="/gacha">
          <div className={`${layout}`}>
            <Image src="/gacha.png" width={48} height={48} priority alt="gacha" />
            <span className="text-3xl ">轉蛋</span>
          </div>
        </Link>
        <Link href="/stage">
          <div className={`${layout}`}>
            <Image src="/stage.png" width={48} height={48} priority alt="stage" className="w-[48px] h-[48px]" />
            <span className="text-3xl ">關卡</span>
          </div>
        </Link>
      </header>
    </>
  )

}