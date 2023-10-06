import { Box } from "@mui/material";

function Page({ children }: any) {
  const height = "calc(100vh - 100px)";

  return (
    <Box
      width="100%"
      mt={2}
      justifyContent="center"
      height={height}
      sx={{ overflowY: "auto" }}
    >
      {children}
    </Box>
  );
}

export default Page;
