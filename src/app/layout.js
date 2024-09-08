import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AuthProvider from "@/AuthProvider/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blogpro App",
  description: "See Blog Every Eye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
         <div className="mx-auto px-4  sm:px-8 md:px-16 lg:px-32 overflow-x-hidden min-h-[100vh]">
          <Navbar />
          <div className=" min-h-[100vh]">
          {children}
          </div>
          <Footer />
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
