import { Box, Button, Typography, useTheme } from "@mui/material";

interface JobItem {
  id: string;
  name: string;
  info: string;
  startDate: Date;
  endDate: Date;
}

interface IModalProps {
  title: string;
  subTitleText?: string;
  content?: any;
  confirmBtnText?: string;
  closeBtnText?: string;
  readOnly?: boolean;
  height?: string;
  width?: string;
  onComplete: () => void;
  onSubmit?: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export default function ModalWrapper({
  title,
  subTitleText = "",
  content,
  confirmBtnText = "Save",
  closeBtnText = "Cancel",
  height = "20rem",
  width = "35rem",
  readOnly = true,
  onComplete,
  onSubmit,
}: IModalProps) {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.navy.main} p={2} height={height} width={width}>
      <Typography variant="h3" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <Typography variant="body2" color={theme.palette.common.white} mt={1}>
        {subTitleText}
      </Typography>
      <Box height="70%" mt={2}>
        <Typography variant="body1" color={theme.palette.common.white}>
          {content}
        </Typography>
      </Box>
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
        {!readOnly && (
          <Button
            sx={{ width: "6rem", marginLeft: "1rem" }}
            variant="contained"
            onClick={onSubmit}
          >
            {confirmBtnText}
          </Button>
        )}
      </Box>
    </Box>
  );
}
