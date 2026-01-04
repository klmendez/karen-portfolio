import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ContactBubbles from "@/components/ContactBubbles";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Karen Mendez | Portafolio",
  description: "Portafolio: Fullstack, APIs, Data y DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <div className="relative">
            {children}
            <ContactBubbles />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
