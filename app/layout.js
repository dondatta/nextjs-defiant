"use client";
// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import  Header  from '@/components/Header'
import Toaster from "@/components/toaster";
import { Box } from "@/components/Box.js";
import { NextUIProvider } from '@nextui-org/react';

import { SessionProvider } from "next-auth/react";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children
}) {

  return (
    <html lang="en">
      <body className={inter.variable}>
         <Box
    css={{
      maxW: "100%"
    }}
  >     
        <SessionProvider session={session}>
        <Toaster /> <NextUIProvider>
      <Header />
          {children}</NextUIProvider>
        </SessionProvider>
        </Box>
      </body>
    </html>
  );
}
