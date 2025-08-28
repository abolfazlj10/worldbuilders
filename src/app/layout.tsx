import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "worldBuilders",
  description: "world with eyes of worldbuilders by Abolfazl_j10",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-dvh">
        {children}
      </body>
    </html>
  );
}