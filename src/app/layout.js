// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//       <link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jost:wght@700&display=swap" rel="stylesheet"/></link>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import Top from "@/Components/Top";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Top/>
       <Navbar/>
        {children}
        <Footer/>
      </body>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jost:wght@700&display=swap" rel="stylesheet" />
    </html>
  );
}
