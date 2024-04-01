import { GeistSans } from "geist/font/sans";
import "./globals.css";
import QueryProvider from "./provider";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={GeistSans.className}>
      <body>
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
