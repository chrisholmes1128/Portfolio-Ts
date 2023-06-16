import { Menu, MenuOpenRounded } from "@mui/icons-material";
import { Box, Collapse, IconButton, List, ListItem, Typography, useTheme } from "@mui/material";

interface IDesktopSidebar {
  open: boolean;
  width: string;
  setOpen: () => void;
}

const ITEMS = ["test 1", "test 2", "test 3", "test 4"];

export default function Sidebar({open, width, setOpen}: IDesktopSidebar) {
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
          justifyContent={open ? "end" : "start"}
        >
          <IconButton
            sx={{ color: theme.palette.common.white }}
            onClick={setOpen}
          >
            {open ? <Menu /> : <MenuOpenRounded />}
          </IconButton>
        </Box>
        {open && ( // Move list into new module 
          <List>
            {ITEMS.map((item) => (
              <ListItem>
                <Typography color="common.white">{item}</Typography>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Collapse>
  );
} 