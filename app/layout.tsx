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
  const linkSidebar = [
    { href: "/murid/dashboard", name: "Dashboard" },
    { href: "/murid/profile", name: "Profile" },
    { href: "/murid/mapel", name: "Mapel" },
    { href: "/murid/rapor", name: "Rapor" },
    { href: "/murid/absensi", name: "Absensi" },
    { href: "/murid/jadwal", name: "Jadwal" },
    { href: "/murid/nilai", name: "Nilai" },
  ];

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);
  // const currentPath = router.pathname;
  const currentLink = linkSidebar.find((link) => link.href === currentPath);

  return (
    <html lang="en">
      <head>
        <title>SIASAT-V1</title>
        <meta
          name="description"
          content="Sistem Akademik Terpadu - Version 1"
        />
      </head>
      <body className={inter.className}>
        <SidebarUI titlePage={currentLink ? currentLink.name : ""}>
          {children}
        </SidebarUI>
      </body>
    </html>
  );
}
