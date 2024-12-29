import type { Metadata } from "next";
import { DM_Sans, Roboto_Mono } from "next/font/google"; // Example fonts
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

// Font setup
const inter = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Ensure text is visible during font load
});

const font = DM_Sans({ subsets: ['latin'] })


const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workzen",
  description: "Automate your workflow with Workzen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
