import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AppThemeProvider } from "./provider";
import DotGrid from "@/components/DotgridBg";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Exo_2({
  subsets: ["latin"],
  weight: ["400", '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Hi I'm Diwanshu",
  description: "Portfolio website of Diwanshu Verma which represents his grinds",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dsvsm4qdo/video/upload/q_auto,f_auto,vc_auto/fl_progressive/v1753772703/Growth_board_yw7iwe.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dsvsm4qdo/video/upload/q_auto,f_auto,vc_auto/v1753772653/dhan_ouilwc.mp4"
          type="video/mp4"
        />
      </head>

      <body
        className={`${inter.className} relative min-h-screen antialiased bg-neutral-100 dark:bg-neutral-700`}>
        <AppThemeProvider>

          {/* dots background */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <DotGrid
              dotSize={1.5}
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
          <Footer />
        </AppThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
