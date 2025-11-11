import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Nitish Kumar Nath – Frontend Engineer",
    template: "%s | Portfolio",
  },
  description:
    "Professional frontend engineer portfolio showcasing projects, skills, resume, and contact details with rich animations.",
  openGraph: {
    title: "Nitish Kumar Nath – Portfolio",
    description:
      "Projects, experience, and contact in a sleek, animated Next.js site.",
    url: "https://example.com",
    siteName: "Nitish Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Kumar Nath – Portfolio",
    description:
      "Projects, experience, and contact in a sleek, animated Next.js site.",
    creator: "@nitish",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
