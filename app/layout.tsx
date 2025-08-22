// app/layout.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";
import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Korn Basic NextJS',
  description: 'เรียนตาม Roitai',
  keywords: 'NextJS, Wordpress API'
}

function layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="container mx-auto px-4 py-8"> {/* เพิ่มบรรทัดนี้เพื่อไม่ให้ทุกหน้าชิดซ้ายจอ */}
          {children}
        </main>
      </body>
    </html>
  );
}
export default layout;