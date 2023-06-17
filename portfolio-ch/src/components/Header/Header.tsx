import {
  Box,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      bgcolor={theme.palette.navy.dark}
      width="100%"
      borderRadius={"0.5rem"}
      padding={2}
    >
      <Typography variant="h4" color="common.white">Welcome to my Portfolio!</Typography>
      <IconButton>

      </IconButton>
    </Box>
  );
}
