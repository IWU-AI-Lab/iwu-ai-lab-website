import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "IWU AI Lab",
  description: "Indiana Wesleyan University AI Lab & AI Club",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ParticleBackground />
          <Header />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}