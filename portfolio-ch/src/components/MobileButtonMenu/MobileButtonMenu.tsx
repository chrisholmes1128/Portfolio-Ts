import React, { useEffect, useState } from "react";
import { Box, Collapse, IconButton, Tooltip, useTheme } from "@mui/material";
import { Close, Menu, MenuOpenRounded } from "@mui/icons-material";
import { MENU_ITEMS } from "../constants";
import { useNavigate } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

function MobileButtonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleMenuItemClick = (location: string) => {
    navigate(location);
    setIsOpen(false);
  };

  const handleToggle = () => {
    console.log("==> ", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <Box mr={1} mt={1}>
      <Collapse orientation="vertical" in={isOpen}>
        {MENU_ITEMS.map((item) => (
          <Box mb={2} key={item.title}>
            <IconButton
              size="large"
              sx={{
                backgroundColor: `${theme.palette.navy.main} !important`,
                color: `${theme.palette.common.white} !important`,
              }}
              onClick={() => handleMenuItemClick(item.location)}
            >
              {item.icon}
            </IconButton>
          </Box>
        ))}
      </Collapse>
      <IconButton
        size="large"
        sx={{
          backgroundColor: `${theme.palette.navy.main} !important`,
          color: `${theme.palette.common.white} !important`,
        }}
        onClick={() => handleToggle()}
      >
        {isOpen ? <Close /> : <Menu />}
      </IconButton>
    </Box>
  );
}

export default MobileButtonMenu;
