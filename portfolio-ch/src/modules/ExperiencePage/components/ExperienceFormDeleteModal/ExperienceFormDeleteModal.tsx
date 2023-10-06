import { Box, Button, Typography, useTheme } from "@mui/material";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";
import { DELETE_COMPANY, GET_COMPANIES } from "../../graphql";
import { useMutation } from "@apollo/client";

interface IConfirmationModalProps {
  companyId: string;
  onClose: () => void;
  onSubmit: (action: string, status: string) => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function ExperienceFormDeleteModal({
  companyId,
  onClose,
  onSubmit,
}: IConfirmationModalProps) {
  const theme = useTheme();
  const isMobile = isCurrentDeviceMobile();

  const [deleteCompany] = useMutation(DELETE_COMPANY);

  const handleDeleteItem = async () => {
    try {
      await deleteCompany({
        variables: {
          id: companyId,
        },
        refetchQueries: [
          {
            query: GET_COMPANIES,
          },
        ],
        awaitRefetchQueries: true,
      });
      onSubmit("deleted", "success");
    } catch (err) {
      onSubmit("deleted", "error");
    }
  };

  const isSubmitDisabled = false;

  return (
    <Box
      bgcolor={theme.palette.navy.main}
      p={2}
      height={isMobile ? "30rem" : "20rem"}
      overflow="hidden"
      width={isMobile ? "90%" : "35rem"}
    >
      <Typography variant="h3" color={theme.palette.primary.main}>
        Delete A Company
      </Typography>
      <Box display="flex" justifyContent="center" textAlign="center" mt={12}>
        <Typography variant="h5" color={theme.palette.common.white} mt={1}>
          Are you sure you want to delete this company from the list?
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
          Cancel
        </Button>
        <Button
          sx={{ width: "6rem", marginLeft: "1rem" }}
          variant="contained"
          disabled={isSubmitDisabled}
          onClick={handleDeleteItem}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default ExperienceFormDeleteModal;
