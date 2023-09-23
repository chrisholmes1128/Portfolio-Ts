import {
  Box,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { MENU_ITEMS, SOCIAL_MEDIA_ITEMS } from "../constants/constants";
import React from "react";
import { useNavigate } from "react-router-dom";
import { openNewWindow } from "../../utils/openNewWindow";
interface ISidebarMenuProps {
  open: boolean;
  isMobile: boolean;
  width?: string;
  setOpen: () => void;
}

export default function SidebarMenuItems({
  open,
  isMobile,
  width,
  setOpen,
}: ISidebarMenuProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleMenuItemClick = (location: string) => {
    navigate(location);
    if (isMobile && open) {
      setOpen();
    }
  };

  return (
    <React.Fragment>
      <Box
        sx={{ marginLeft: !open ? "-0.6rem" : "0px" }}
        marginTop={-2}
        height="82%"
        width={open ? width : "4.5rem"}
      >
        <List>
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.location}>
              <Tooltip title={!open && item.title} placement="right">
                <ListItemButton
                  onClick={() => handleMenuItemClick(item.location)}
                >
                  <Icon sx={{ color: theme.palette.common.white }}>
                    {item.icon}
                  </Icon>
                  {open && (
                    <Typography ml={2} color="common.white" variant="h5">
                      {item.title}
                    </Typography>
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ marginLeft: !open ? "-0.6rem" : "0px" }}>
        <Box display="flex" justifyContent="center">
          <Typography color="common.white">
            Created by Christopher Holmes
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography color="common.white">(978) 374-6941</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography color="common.white">
            chrisholmes1128@gmail.com
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-evenly" mt={2}>
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <IconButton
              key={item.link}
              onClick={() => openNewWindow(item.link)}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
}
