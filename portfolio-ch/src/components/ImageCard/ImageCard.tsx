import React from "react";
import { Box, Button, Modal, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

interface ICardProps {
  title: string;
  imageSource: string;
  height: string;
  width: string;
  handleClick?: () => void,
}

export default function ImageCard({ title, imageSource, height, width, handleClick }: ICardProps) {
  // add title and children as props
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setIsOpen(!isOpen)} fullWidth>
        <Box
          component="img"
          display="block"
          src={imageSource}
          height={height}
          width={width}
        />
        <Typography variant="h5" color="common.white" mt="1rem">
          {title}
        </Typography>
      </Button>
      {isOpen && (
        <ModalWrapper
          title={title}
          onComplete={() => setIsOpen(false)}
          height="20rem"
          width="40rem"
        />
      )}
    </Box>
  );
}
