import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* ================= FONT ================= */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: "SaaS Landing Dashboard",
  description:
    "Pixel-perfect SaaS landing page with authentication and API dashboard integration.",
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
