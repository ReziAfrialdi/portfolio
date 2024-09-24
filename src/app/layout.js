import localFont from "next/font/local";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const overusedMedium = localFont({
  src: [
    {
      path: "./fonts/OverusedGrotesk-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-overused-medium",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"], // Pilih variasi font yang kamu butuhkan
  subsets: ["latin"], // Sesuaikan dengan kebutuhan karakter
  variable: "--font-dmsans", // Atur variable CSS
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${overusedMedium.variable} ${dmSans.variable} antialiased bg-backgroundGradient `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
