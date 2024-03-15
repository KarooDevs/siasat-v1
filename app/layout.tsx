"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarUI from "@/components/Sidebar";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "SIASAT-V1",
//   description: "Sistem Akademik Terpadu - Version 1",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const linkSidebar = [
  //   { href: "/murid/dashboard", name: "Dashboard" },
  //   { href: "/murid/profile", name: "Profile" },
  //   { href: "/murid/mapel", name: "Mapel" },
  //   { href: "/murid/rapor", name: "Rapor" },
  //   { href: "/murid/absensi", name: "Absensi" },
  //   { href: "/murid/jadwal", name: "Jadwal" },
  //   { href: "/murid/nilai", name: "Nilai" },
  // ];

  // const [currentPath, setCurrentPath] = useState("");
  // // sidebar
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setCurrentPath(path);

  //   // cek sidebar open
  //   const storedSidebarState = localStorage.getItem("isSidebarOpen");
  //   if (storedSidebarState) {
  //     setIsSidebarOpen(storedSidebarState === "true");
  //   }
  // }, []);

  // // Simpan status sidebar ke local storage saat berubah
  // useEffect(() => {
  //   localStorage.setItem("isSidebarOpen", String(isSidebarOpen));
  //   console.log(isSidebarOpen);
  // }, [isSidebarOpen]);

  // // const currentPath = router.pathname;
  // const currentLink = linkSidebar.find((link) => link.href === currentPath);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prevState) => !prevState);
  // };

  return (
    <html lang="en">
      <head>
        <title>SIASAT-V1</title>
        <meta
          name="description"
          content="Sistem Akademik Terpadu - Version 1"
        />
      </head>
      <body className={inter.className} style={{ backgroundColor: "#d9d9d9" }}>
        {/* <SidebarUI
          titlePage={currentLink ? currentLink.name : ""}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        >
          {children}
        </SidebarUI> */}
        {children}
      </body>
    </html>
  );
}
