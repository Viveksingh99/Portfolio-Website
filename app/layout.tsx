import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vivek | Personal Portfolio",
  description: "Vivek is a Frontend developer with 2 years of experience.",
  keywords: ["Vivek", "Frontend Developer", "Full-stack", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "vivek | Personal Portfolio",
    description: "Frontend developer portfolio — projects, skills, and contact.",
    url: "https://your-domain.com",
    siteName: "vivek",
    images: [],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-950 relative pt-28 sm:pt-36 dark:from-slate-900 dark:to-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <a
          href="#"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-md shadow"
        >
          Skip to content
        </a>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
              <div className="absolute right-[-12rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-200 to-pink-200 opacity-60 blur-3xl animate-pulse mix-blend-soft-light dark:opacity-30" />
            </div>
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
