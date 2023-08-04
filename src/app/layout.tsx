import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>{children}</body>
    </html>
  );
}
