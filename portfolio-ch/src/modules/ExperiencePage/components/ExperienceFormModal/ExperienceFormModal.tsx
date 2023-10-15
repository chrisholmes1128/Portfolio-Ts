import { useMutation } from "@apollo/client";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { CREATE_COMPANY, GET_COMPANIES, UPDATE_COMPANY } from "../../graphql";
import { ExperienceForm } from "..";
import { useState } from "react";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";

interface JobItem {
  id: string;
  name: string;
  info: string;
  startDate: string;
  isReadOnly: boolean;
  endDate: string;
}

interface IModalProps {
  title: string;
  subTitleText?: string;
  confirmBtnText?: string;
  closeBtnText?: string;
  readOnly?: boolean;
  isEditing?: boolean;
  inputs?: JobItem;
  onClose: () => void;
  onSubmit?: (action: string, status: string) => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

const initialValues = {
  id: "",
  name: "",
  startDate: new Date().toLocaleDateString(),
  endDate: new Date().toLocaleDateString(),
  info: "",
  isReadOnly: false,
};

function ExperienceFormModal({
  title,
  subTitleText = "",
  confirmBtnText = "Save",
  closeBtnText = "Cancel",
  readOnly = true,
  isEditing = false,
  inputs = initialValues,
  onClose,
  onSubmit = () => {},
}: IModalProps) {
  const [values, setValues] = useState<JobItem>(inputs);

  const [createCompany] = useMutation(CREATE_COMPANY);
  const [updateCompany] = useMutation(UPDATE_COMPANY);

  const theme = useTheme();

  const handleSubmit = async () => {
    const { id, name, startDate, endDate, info } = values;

    if (isEditing) {
      // update
      try {
        await updateCompany({
          variables: {
            id,
            companyInput: {
              name,
              startDate,
              endDate,
              info,
              updatedAt: new Date().toISOString(),
            },
          },
          refetchQueries: [
            {
              query: GET_COMPANIES,
            },
          ],
          awaitRefetchQueries: true,
        });
        onSubmit("updated", "success");
      } catch (err) {
        onSubmit("updated", "error");
      }
    } else {
      // create
      try {
        await createCompany({
          variables: {
            companyInput: {
              name,
              startDate,
              endDate,
              info,
              updatedAt: new Date().toISOString(),
              isReadOnly: false,
            },
          },
          refetchQueries: [
            {
              query: GET_COMPANIES,
            },
          ],
          awaitRefetchQueries: true,
        });
        onSubmit("created", "success");
      } catch (err) {
        onSubmit("created", "error");
      }
    }
  };

  const handleChange = (name: string, value: string) => {
    if (name) {
      setValues({ ...values, [name]: value });
    }
  };

  const isSubmitDisabled = values?.name?.length < 3;
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

      <ExperienceForm
        readOnly={readOnly}
        onChange={handleChange}
        inputs={values}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bottom={0}
        sx={actionButtons}
      >
        <Button sx={{ width: "6rem" }} variant="outlined" onClick={onClose}>
          {closeBtnText}
        </Button>
        {!readOnly && (
          <Button
            sx={{ width: "6rem", marginLeft: "1rem" }}
            variant="contained"
            disabled={isSubmitDisabled}
            onClick={handleSubmit}
          >
            {confirmBtnText}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ExperienceFormModal;
