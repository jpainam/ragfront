import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CN Docs - Comprehensive Networking Documentation",
  description:
    "A beautiful documentation site for computer networking and socket programming with clear explanations and practical examples.",
  keywords: [
    "computer networking",
    "socket programming",
    "TCP/IP",
    "OSI model",
    "networking documentation",
    "network protocols",
    "socket examples",
  ],
  metadataBase: new URL("https://cn.mvp-subha.me"),
  openGraph: {
    title: "cocentra.ai",
    description:
      "A beautiful documentation site for computer networking and socket programming with clear explanations and practical examples.",
    url: "https://cn.mvp-subha.me",
    siteName: "docentra.ai",
    images: [
      {
        url: "https://i.postimg.cc/rw0PX56X/Screenshot-2025-05-19-000837.png",
        width: 1200,
        height: 630,
        alt: "Docentra",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docentra Ai",
    description:
      "A beautiful documentation site for computer networking and socket programming with clear explanations and practical examples.",
    creator: "@mvp_Subha",
    images: ["https://i.postimg.cc/rw0PX56X/Screenshot-2025-05-19-000837.png"],
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
        <meta name="google" content="notranslate" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        {/* <script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            async
          ></script> */}
      </head>
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
