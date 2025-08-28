import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "worldBuilders",
  description: "world with eyes of worldbuilders by Abolfazl_j10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
