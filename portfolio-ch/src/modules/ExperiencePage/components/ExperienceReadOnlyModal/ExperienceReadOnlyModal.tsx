import { Box, Button, Typography, useTheme } from "@mui/material";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";
import { Circle as CircleIcon } from "@mui/icons-material";
import { JobItem } from "../../interfaces";

interface IExperienceReadOnlyModalProps {
  company: JobItem;
  onClose: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function ExperienceReadOnlyModal({
  company,
  onClose,
}: IExperienceReadOnlyModalProps) {
  const theme = useTheme();

  const isMobile = isCurrentDeviceMobile();

  const infoList = company.info.length ? company?.info?.split(".") : [];

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
          {company.name}
        </Typography>
        {!isMobile && (
          <Typography variant="h5" color={theme.palette.common.white}>
            {new Date(company.startDate).toLocaleDateString()} -{" "}
            {new Date(company.endDate).toLocaleDateString()}
          </Typography>
        )}
      </Box>
      {isMobile && (
        <Typography variant="body1" color={theme.palette.common.white}>
          {new Date(company.startDate).toLocaleDateString()} -{" "}
          {new Date(company.endDate).toLocaleDateString()}
        </Typography>
      )}

      <Box height={"33rem"} sx={{ overflowY: "auto" }} mt={2}>
        <Typography variant="h5" color={theme.palette.common.white}>
          Responsibilities:
        </Typography>
        {!!infoList.length ? (
          infoList.map((item) => (
            <Typography variant="h6" color={theme.palette.common.white} mt={2}>
              {!!item.length && (
                <CircleIcon
                  sx={{
                    color: theme.palette.common.white,
                    height: "0.5rem",
                    width: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                />
              )}

              {item}
            </Typography>
          ))
        ) : (
          <Typography variant="h6" color={theme.palette.common.white} mt={2}>
            No Responsibilities were found for this position
          </Typography>
        )}
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

export default ExperienceReadOnlyModal;
