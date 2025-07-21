import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Video from '@/components/video/video';

import { Roboto, Raleway, Open_Sans, Archivo_Black } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  metadataBase: new URL('https://uilab.co.uk'),
  title: "Front End Developer Portfolio",
  description: "A portfolio of my work as a front end developer",
  keywords: ["Front End Developer", "Portfolio", "Web Development", "React", "Next.js", "JavaScript", "HTML", "CSS"],
  openGraph: {
    title: "Front End Developer Portfolio",
    description: "A portfolio of my work as a front end developer",
    url: "https://uilab.co.uk",
    siteName: "Front End Developer Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={`${roboto.className} ${raleway.className} ${openSans.className} ${archivoBlack.className}`}>
        <Navbar />
        <Video />
        {children}
      </body>
    </html>
  );
}