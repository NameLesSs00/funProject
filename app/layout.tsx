import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dont trust anyone",
  description: "made by Paul samy ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[rgb(16,24,40)]"
      >
        {children}
      </body>
    </html>
  );
}
