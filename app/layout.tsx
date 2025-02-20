import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const monumentExtendedRegular = localFont({
  src: '../public/fonts/MonumentExtended-Regular.otf',
});

const monumentExtendedBold = localFont({
  src: '../public/fonts/MonumentExtended-UltraBold.otf',
});

export const metadata: Metadata = {
  title: "Meritum",
  description: "A new way to reward your employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={monumentExtendedBold.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
