import type { Metadata } from "next";
import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Producty Shop",
  description: "Buy cool stuff from our collection",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        <header className="bg-white shadow">
          <div className="container mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900">My Shop</h1>
          </div>
        </header>
        <main className="container mx-auto py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
