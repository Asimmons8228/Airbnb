import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";
import SearchModal from "./components/Modals/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
        </body>
    </html>
  );
}
