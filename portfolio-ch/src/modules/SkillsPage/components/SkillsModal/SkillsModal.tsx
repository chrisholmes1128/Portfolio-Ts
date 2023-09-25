import { Box, Button, Typography, useTheme } from "@mui/material";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";

interface IModalProps {
  title: string;
  subTitleText?: string;
  closeBtnText?: string;
  onComplete: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function ExperienceFormModal({
  title,
  subTitleText = "",
  closeBtnText = "Cancel",
  onComplete,
}: IModalProps) {
  const theme = useTheme();

  const isMobile = isCurrentDeviceMobile();

  return (
    <Box
      bgcolor={theme.palette.navy.main}
      p={2}
      height={isMobile ? "30rem" : "20rem"}
      overflow="hidden"
      width={isMobile ? "90%" : "35rem"}
    >
      <Typography variant="h3" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <Typography variant="body2" color={theme.palette.common.white} mt={1}>
        {subTitleText}
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bottom={0}
        sx={actionButtons}
      >
        <Button sx={{ width: "6rem" }} variant="outlined" onClick={onComplete}>
          {closeBtnText}
        </Button>
      </Box>
    </Box>
  );
}

export default ExperienceFormModal;
