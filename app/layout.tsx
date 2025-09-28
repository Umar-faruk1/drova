import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google'
import { UploadsProvider } from "./context/uploads"


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
  }
)

export const metadata: Metadata = {
  title: "Drova",
  description: "Drova- The Only Storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <UploadsProvider>
          {children}
        </UploadsProvider>
      </body>
    </html>
  );
}
