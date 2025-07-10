import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AppThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Diwanshu's Portfolio",
  description: "Portfolio website of Diwanshu Verma which represents his grinds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
        suppressHydrationWarning>
        <AppThemeProvider>
          <Navbar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
