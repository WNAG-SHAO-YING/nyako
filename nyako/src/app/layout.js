import "@/app/global.css";
import GOtop from "@/components/gotop";
import Header from "@/components/header";
import { icons } from "lucide-react";

export const metadata = {
  title: "貓咪大戰爭",
  description: "這是貓咪大戰爭",
  icons: {
    icon: "/icon/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <>
        <body className="flex flex-col min-h-svh bg-lightbg">
          <Header />
          <main className="flex-1">{children}</main>
          <div className="w-full h-[10svh]"></div>
          <div className="w-full h-[10svh] flex flex-col items-center justify-center  bottom-0 bg-gray-400">
            <p>本網站所有素材版權均屬於 PONOS Corporation</p>
            <p>本網站僅供學術練習使用</p>
          </div>
          <div className="w-full h-[10svh] md:hidden"></div>
          <div className="fixed right-0 bottom-0">
            <GOtop />
          </div>
        </body>
      </>
    </html>
  );
}
