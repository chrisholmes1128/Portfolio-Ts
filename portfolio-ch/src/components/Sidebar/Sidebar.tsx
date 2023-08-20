import { Menu, MenuOpenRounded } from "@mui/icons-material";
import { Box, Collapse, IconButton, useTheme } from "@mui/material";
import SidebarMenuItems from "./SidebarMenuItems";

interface ISidebar {
  open: boolean;
  width: string;
  setOpen: () => void;
}

export default function Sidebar({open, width, setOpen}: ISidebar) {
  const theme = useTheme();

  return (
    <Collapse
      in={open}
      orientation="horizontal"
      sx={{ height: "100%" }}
      collapsedSize={35}
    >
      <Box
        height="100vh"
        width={width}
        bgcolor={theme.palette.navy.dark}
        sx={{
          borderTopRightRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
        }}
      >
        <Box
          display="flex"
          width="100%"
          mb={1}
          justifyContent={open ? "end" : "start"}
        >
          <IconButton
            sx={{ color: theme.palette.common.white }}
            onClick={setOpen}
          >
            {open ? <Menu /> : <MenuOpenRounded />}
          </IconButton>
        </Box>
        <SidebarMenuItems
          open={open}
        />
      </Box>
    </Collapse>
  );
} 