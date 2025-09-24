import '@/app/global.css'
export const metadata = {
  title: "貓咪大戰爭",
  description: "這是貓咪大戰爭",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}
      </body>
      
    </html>
  );
}