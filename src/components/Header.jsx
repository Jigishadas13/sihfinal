import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />

      {/* First Header: White Header */}
      <header
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "18px" }}>Welcome to My App</h1>
      </header>

      {/* Second Header: Sky Blue Header with Drawer Icon */}
      <header
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: "70px",
          left: "0",
          zIndex: "999",
          padding: "0 16px",
        }}
      >
        {/* Drawer Toggle Button */}
        <IconButton
          color="#FFFF"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <h1 style={{ color: "#FFFF", fontWeight: "bold", fontSize: "36px" }}>
          Jal Shakti
        </h1>
      </header>

      {/* Third Header: Black Header with Sliding Links */}
      <header
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: "150px",
          left: "0",
          zIndex: "998",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "slide 10s linear infinite",
          }}
        >
          <a
            href="https://nmcg.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 20px",
              fontSize: "18px",
            }}
          >
            National Mission for Clean Ganga
          </a>
          <a
            href="https://jsactr.mowr.gov.in/public_dash/dashboard.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 20px",
              fontSize: "18px",
            }}
          >
            Jal Shakti Dashboard
          </a>
          <a
            href="http://cgwb.gov.in/cgwbmis/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 20px",
              fontSize: "18px",
            }}
          >
            Central Ground Water Board
          </a>
          <a
            href="https://damsafety.cwc.gov.in/damsafety/index.php"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 20px",
              fontSize: "18px",
            }}
          >
            Dam Safety Portal
          </a>
        </div>
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </header>

      {/* Persistent Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["HOME", "DASHBOARD", "WATER QUALITY", "HOUSEHOLD CONNECTIONS","INSIGHTS"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
