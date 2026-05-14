import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "CollegeSathi | Amity Online MBA Admissions",
  description: "Join Amity Online MBA - UGC Entitled, World-Class Education with 100% Placement Support. Book your slot now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
