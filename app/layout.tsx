
import Navbar from "@/components/Navbar";
import Link from "next/link";
import './globals.css'
import { Metadata } from "next";

export const metadata:Metadata ={
  title: 'Korn Basic NextJS',
  description: 'เรียนตาม Roitai',
  keywords: 'NextJS, Wordpress API'
}


function layout({children}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout