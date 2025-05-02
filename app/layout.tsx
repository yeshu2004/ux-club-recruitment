import type { Metadata } from "next";
import Navabar from "./components/Navabar";
import "./globals.css";

export const metadata: Metadata = {
  title: "UX Club Recruitment Form 2025",
  description: "Apply now to be part of the creative minds behind the UX Club. Let your work speak!",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <Navabar />
        {children}
      </body>
    </html>
  );
}
