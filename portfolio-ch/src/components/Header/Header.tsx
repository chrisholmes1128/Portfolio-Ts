import { Box, Button, Typography, useTheme } from "@mui/material";

import { styled } from "@mui/material";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

export default function Header() {
  const theme = useTheme();

  const downloadResume = () => {
    console.log("download");
  };

  return (
    <Box
      display="flex"
      bgcolor={theme.palette.navy.dark}
      width="100%"
      borderRadius={"0.5rem"}
      alignItems="center"
      padding={2}
    >
      <Typography variant="h3" color="common.white">
        Welcome to my Portfolio!
      </Typography>
      <ResumeButton variant="outlined" onClick={() => downloadResume()}>
        Resume
      </ResumeButton>
    </Box>
  );
}
