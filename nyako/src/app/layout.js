import '@/app/global.css'
import GOtop from '@/components/gotop';
import Header from '@/components/header';


export const metadata = {
  title: "貓咪大戰爭",
  description: "這是貓咪大戰爭",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className='bg-lightbg'>
        <Header />
        {children}
        <div className="fixed right-0 bottom-0">
          <GOtop />
        </div>
      </body>

    </html>
  );
}