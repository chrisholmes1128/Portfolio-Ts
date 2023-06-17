import { Box, CircularProgress } from "@mui/material";

export default function LoaderSpinner() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <CircularProgress sx={{color: "secondary.main"}} />
    </Box>
  );
}
