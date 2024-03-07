import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import * as React from "react";
import { MdDashboard } from "react-icons/md";

export const muridListItems = (
  <React.Fragment>
    {/* Dashboard */}
    <ListItemButton href="/murid/dashboard">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    {/* Profile */}
    <ListItemButton href="/murid/profile">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    {/* Mapel */}
    <ListItemButton href="/murid/mapel">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Mapel" />
    </ListItemButton>
    {/* Rapor */}
    <ListItemButton href="/murid/rapor">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Rapor" />
    </ListItemButton>
    {/* Absensi */}
    <ListItemButton href="/murid/absensi">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Absensi" />
    </ListItemButton>
    {/* Nilai */}
    <ListItemButton href="/murid/nilai">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Nilai" />
    </ListItemButton>
    {/* Jadwal */}
    <ListItemButton href="/murid/jadwal">
      <ListItemIcon>
        <MdDashboard color="white" />
      </ListItemIcon>
      <ListItemText primary="Jadwal" />
    </ListItemButton>
  </React.Fragment>
);
