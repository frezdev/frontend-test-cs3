import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/app/components/header";
import { ListOfCategories } from "@/app/components/listOfCategories";
import "./globals.css";
import { getProducts, getCategories } from "./services";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Technical test for Frontend Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getProducts();

  if (!data) return;
  const allCategories = await getCategories(data.products);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='grid grid-cols-[320px_1fr]'>
          <aside className=''>
            <ListOfCategories categories={allCategories} />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
