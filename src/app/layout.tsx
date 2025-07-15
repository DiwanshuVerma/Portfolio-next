import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AppThemeProvider } from "./provider";
import DotGrid from "@/components/DotgridBg";

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
        className={`${inter.className} relative min-h-screen antialiased bg-neutral-100 dark:bg-neutral-700`}
        suppressHydrationWarning>
        <AppThemeProvider>

          {/* dots background */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <DotGrid
              dotSize={1}
              gap={15}
              baseColor="#5227FF"
              activeColor="#dc2626"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          <Navbar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
