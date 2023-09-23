import { Box } from "@mui/material";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

function Page({ children }: any) {
  return (
    <Box width="100%" mt={2} justifyContent="center">
      {children}
    </Box>
  );
}

export default Page;
