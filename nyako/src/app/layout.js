import '@/app/global.css'
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "貓咪大戰爭",
  description: "這是貓咪大戰爭",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className='bg-lightbg'>
        <header className="
        sticky top-0 z-50 bottom-0 w-full h-16
        md:fixed md:top-0 
        grid grid-cols-3 items-center 
          bg-orange-200  ">
          <Image src="/icon/icon.png" width={60} height={60} priority alt="icon" />
          <div className="grid grid-cols-4  gap-3">
            <Link href="/">
              <span className="text-3xl ">首頁</span>
            </Link>
            <Link href="/cat">
              <span className="text-3xl ">圖鑑</span>
            </Link>
            <span className="text-3xl ">轉蛋</span>
            <span className="text-3xl ">關卡</span>
          </div>
          <div></div>
        </header>
        {children}
      </body>

    </html>
  );
}