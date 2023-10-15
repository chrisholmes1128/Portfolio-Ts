import { Box, Button, Typography, useTheme } from "@mui/material";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";
import { HelpOutline as HelpIcon } from "@mui/icons-material";

interface IExperienceFormModalProps {
  closeBtnText?: string;
  onClose: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function ExperienceFormModal({ onClose }: IExperienceFormModalProps) {
  const theme = useTheme();

  const isMobile = isCurrentDeviceMobile();

  return (
    <Box
      bgcolor={theme.palette.navy.main}
      p={2}
      height={"40rem"}
      overflow="hidden"
      width={isMobile ? "90%" : "35rem"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" color={theme.palette.primary.main}>
          Interactive Experience List Help
        </Typography>
        <HelpIcon sx={{ color: theme.palette.common.white }} />
      </Box>
      <Box height={"33rem"} sx={{ overflowY: "auto" }}>
        <Typography variant="h5" color={theme.palette.common.white} mt={2}>
          The purpose of this page is to both display my previous work
          experience along with demonstrate my ability to save and retrieve data
          using CRUD operations (Create, Read, Update, Delete). Please note my
          previous work experience is disabled from being edited or deleted from
          the list. However, feel free to add your company to the list and make
          updates to it!
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.main} mt={2}>
          Create:
        </Typography>
        <Typography variant="h5" color={theme.palette.common.white} mt={1}>
          To add your company to the list simply click the add icon (+) button
          in the top right corner, fill out all required fields, and click save.
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.main} mt={1}>
          Read:
        </Typography>
        <Typography variant="h5" color={theme.palette.common.white} mt={1}>
          To view my prior experience details, click the name of the company
          you'd like to learn more about.
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.main} mt={1}>
          Update:
        </Typography>
        <Typography variant="h5" color={theme.palette.common.white} mt={1}>
          Click the pencil icon inline with the company you'd like to update to
          open the modal, ensure to fill out all required fields, and click
          save.
        </Typography>
        <Typography variant="h5" color={theme.palette.primary.main} mt={1}>
          Delete:
        </Typography>
        <Typography variant="h5" color={theme.palette.common.white} mt={1}>
          To delete your company from the list, simply click the trash can icon
          button in the top right corner, fill out the required fields, and
          click save.
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bottom={0}
        sx={actionButtons}
      >
        <Button sx={{ width: "6rem" }} variant="outlined" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
}

export default ExperienceFormModal;
