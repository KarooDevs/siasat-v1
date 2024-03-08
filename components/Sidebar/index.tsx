"use client";

import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Link,
  Button,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ReactNode, useState } from "react";
import {
  MdChevronLeft,
  MdMenu,
  MdNotifications,
  MdPersonOutline,
} from "react-icons/md";
import { muridListItems } from "./muridListItems";

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

//Theme
const defaultTheme = createTheme();

const SidebarUI = ({
  children,
  titlePage,
  isOpen,
  toggleSidebar,
}: {
  children: ReactNode;
  titlePage: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [open, setOpen] = useState(isOpen);
  const toggleDrawer = () => {
    setOpen(!open);
    // isOpen = !open;
    // toggleSidebar();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* Navbar */}
        <AppBar
          position="absolute"
          open={isOpen}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar sx={{ pr: "24px" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleSidebar}
              aria-label="open drawer"
              sx={{ marginRight: "36px", ...(isOpen && { display: "none" }) }}
            >
              <MdMenu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {titlePage}
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MdNotifications />
              </Badge>
            </IconButton> */}
            {/* <Button
              variant="contained"
              color="primary"
              sx={{ ml: 1 }}
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button> */}
            <div style={{ marginLeft: 1 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <MdPersonOutline size={64} color="#297a94" />
                </Grid>
                <Grid item>
                  <Grid>
                    <Typography variant="subtitle1" color="initial">
                      Murid,
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="h6" color="initial" fontWeight="bold">
                      Beta Nurul Awalin
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
        {/* Navbar End */}

        {/* Sidebar */}
        <Drawer
          variant="permanent"
          open={isOpen}
          sx={{ backgroundColor: "#2e2e2e", color: "white" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              backgroundColor: "#2e2e2e",
              color: "white",
            }}
          >
            <IconButton onClick={toggleSidebar}>
              <MdChevronLeft color="white" />
            </IconButton>
          </Toolbar>
          <List
            component="nav"
            sx={{
              backgroundColor: "#2e2e2e",
              color: "white",
              height: "100%",
            }}
          >
            {/* Sidebar content */}

            {muridListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        {/* Sidebar End */}

        {/* Main */}
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
        >
          <Toolbar />
          <Box sx={{ mt: 1, mb: 4, ml: "auto", mr: "auto" }}>{children}</Box>
        </Box>
        {/* Main End */}
      </Box>
    </ThemeProvider>
  );
};

export default SidebarUI;
