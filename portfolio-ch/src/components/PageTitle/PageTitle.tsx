import { Box, Typography } from "@mui/material";

export default function PageTitle() {
  return (
    <Box
      display="flex"
      justifyContent="start"
      width="100%"
      mt={2}
      ml={0}
    >
      <Typography variant="h2" color="primary.main">
        Skills
      </Typography>
    </Box>
  );
}
