import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";

import MENU_ITEMS from "../constants/constants";

interface ISidebarMenuProps {
  open: boolean;
}

export default function SidebarMenuItems({ open }: ISidebarMenuProps) {
  const theme = useTheme();

  const handleMenuItemClick = (location: string) => {
    console.log(location);
  };

  return (
    <Box sx={{ marginLeft: !open ? "-1.6rem" : "0px" }}>
      <List>
        {MENU_ITEMS.map((item) => (
          <ListItem key={item.location}>
            <ListItemButton onClick={() => handleMenuItemClick(item.location)}>
              <Icon sx={{ color: theme.palette.common.white }}>
                {item.icon}
              </Icon>
              <Typography ml={2} color="common.white" variant="h6">
                {item.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
