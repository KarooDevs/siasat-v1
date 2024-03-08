"use client";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { MdDashboard } from "react-icons/md";

export const muridListItems = (
  // const router = useRouter();

  // const sidebarItems = [
  //   { href: "/murid/dashboard", text: "Dashboard" },
  //   { href: "/murid/profile", text: "Profile" },
  //   { href: "/murid/mapel", text: "Mapel" },
  //   { href: "/murid/rapor", text: "Rapor" },
  //   { href: "/murid/absensi", text: "Absensi" },
  //   { href: "/murid/nilai", text: "Nilai" },
  //   { href: "/murid/jadwal", text: "Jadwal" },
  // ];

  <React.Fragment>
    {/* {sidebarItems.map((item) => (
        <ListItemButton
          key={item.href}
          href={item.href}
          selected={router.pathname === item.href}
          sx={{
            backgroundColor:
              router.pathname === item.href ? "#297a94" : "inherit",
            color: router.pathname === item.href ? "white" : "inherit",
          }}
        >
          <ListItemIcon>
            <MdDashboard />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))} */}

    {/* Dashboard */}
    <ListItemButton
      href="/murid/dashboard"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    {/* Profile */}
    <ListItemButton
      href="/murid/profile"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    {/* Mapel */}
    <ListItemButton
      href="/murid/mapel"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Mapel" />
    </ListItemButton>
    {/* Rapor */}
    {/* <ListItemButton
      href="/murid/rapor"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Rapor" />
    </ListItemButton> */}
    {/* Absensi */}
    <ListItemButton
      href="/murid/absensi"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Absensi" />
    </ListItemButton>
    {/* Nilai */}
    <ListItemButton
      href="/murid/nilai"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Nilai" />
    </ListItemButton>
    {/* Jadwal */}
    <ListItemButton
      href="/murid/jadwal"
      sx={{
        ":hover": { backgroundColor: "#297a94" },
      }}
    >
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Jadwal" />
    </ListItemButton>
  </React.Fragment>
);
