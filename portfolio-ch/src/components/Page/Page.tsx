import { Box } from "@mui/material";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

function Page({ children }: any) {
  const isMobile = isCurrentDeviceMobile();
  const height = isMobile ? window.innerHeight - 100 : "100%";

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
