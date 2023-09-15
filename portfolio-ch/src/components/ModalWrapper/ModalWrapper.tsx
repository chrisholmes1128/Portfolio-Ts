import { Box, Button, Modal, Typography, useTheme } from "@mui/material";

interface ICardProps {
  title: string;
  subText?: string;
  height: string;
  width: string;
  details?: string;
  readOnly?: boolean;
  onComplete: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#26324a",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "0.5rem",
  p: 2,
};

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

export default function ModalWrapper({
  title,
  subText = "",
  height = "25rem",
  width = "35rem",
  details = "",
  readOnly = true,
  onComplete,
}: ICardProps) {
  const theme = useTheme();

  return (
    <Box>
      <Modal open onClose={onComplete}>
        <Box width={width} height={height} sx={style}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            {title}
          </Typography>
          <Typography variant="body2" color={theme.palette.common.white} mt={1}>
            {subText}
          </Typography>
          <Box height="70%" mt={2}>
            <Typography variant="body1" color={theme.palette.common.white}>
              {details}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bottom={0}
            sx={actionButtons}
          >
            <Button
              sx={{ width: "6rem" }}
              variant="outlined"
              onClick={onComplete}
            >
              Close
            </Button>
            {!readOnly && (
              <Button
                sx={{ width: "6rem", marginLeft: "1rem" }}
                variant="contained"
              >
                Save
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
