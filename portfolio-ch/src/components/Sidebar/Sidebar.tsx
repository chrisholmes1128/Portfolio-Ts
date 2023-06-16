import { Drawer } from "@mui/material";
import React from "react";

interface IDesktopSidebar {
  open: boolean;
  children: React.ReactNode;
}

const DRAWER_WIDTH = "20rem"

export default function Sidebar({open, children}: IDesktopSidebar) {
  return (
    <Drawer
      anchor="left"
      open={open}
      sx={{
        width: { xs: 0, sm: open ? DRAWER_WIDTH : 0 },
        transition: "width 0.5s",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: { xs: 0, sm: open ? DRAWER_WIDTH : 0 },
          transition: "width 0.5s",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
    >
      {children}
    </Drawer>
  );
} 