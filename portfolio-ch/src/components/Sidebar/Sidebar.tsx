import { Close, Menu } from "@mui/icons-material";
import { Box, Collapse, IconButton, useTheme } from "@mui/material";
import SidebarMenuItems from "./SidebarMenuItems";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

interface ISidebar {
  open: boolean;
  width: string;
  setOpen: () => void;
}

export default function Sidebar({ open, width, setOpen }: ISidebar) {
  const theme = useTheme();

  const isMobile = isCurrentDeviceMobile();

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
          borderTopRightRadius: !isMobile ? "0.5rem" : "",
          borderBottomRightRadius: !isMobile ? "0.5rem" : "",
        }}
      >
        <Box
          display="flex"
          width="100%"
          mb={1}
          justifyContent={open ? "end" : "start"}
        >
          <Box mr={1} mt={1}>
            <IconButton onClick={setOpen}>
              {open ? <Close /> : <Menu />}
            </IconButton>
          </Box>
        </Box>
        <SidebarMenuItems
          open={open}
          width={width}
          setOpen={setOpen}
          isMobile={isMobile}
        />
      </Box>
    </Collapse>
  );
}
