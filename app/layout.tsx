// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";
import AuthStatus from "@/components/auth-status";
import NavigationHeader from "@/components/nav";

const inter = Inter({
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NavigationHeader/>
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
