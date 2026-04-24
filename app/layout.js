import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata
export const metadata = {
  title: "Naming Ceremony Invitation",
  description: "You are invited",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✨ Elegant font for invitation */}
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="
          min-h-screen 
          font-sans
          bg-gradient-to-br 
          from-[#f5e6c8] 
          via-[#f0d9b5] 
          to-[#e6c89c]
          text-gray-900
        "
      >
        {children}
      </body>
    </html>
  );
}