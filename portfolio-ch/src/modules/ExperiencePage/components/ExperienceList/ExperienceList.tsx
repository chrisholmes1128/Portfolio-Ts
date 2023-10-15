import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  List,
  Collapse,
  ListItemText,
  IconButton,
  ListItem,
} from "@mui/material";

import { Add, Delete as DeleteIcon, Edit, Sort } from "@mui/icons-material";

import { TransitionGroup } from "react-transition-group";
import { useGlobalModal } from "../../../../contexts/ModalContext";
import ExperienceFormModal from "../ExperienceFormModal";
import { GET_COMPANIES } from "../../graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import Page from "../../../../components/Page";
import ExperienceFormDeleteModal from "../ExperienceFormDeleteModal";
import {
  useErrorNotification,
  useSuccessNotification,
} from "../../../../utils/notifications";

interface JobItem {
  id: string;
  name: string;
  info: string;
  startDate: string;
  endDate: string;
  isReadOnly: boolean;
}

function ExperienceList() {
  const { setModalOpen } = useGlobalModal();
  const theme = useTheme();

  const { data, loading } = useQuery(GET_COMPANIES);

  const [companies, setCompanies] = useState<JobItem[]>([]);

  useEffect(() => {
    if (data?.getCompanies) {
      setCompanies(data?.getCompanies);
    }
  }, [data?.getCompanies]);

  const handleComplete = (action: string, status: string) => {
    setModalOpen(false);

    if (status === "success") {
      useSuccessNotification(`Successfully ${action} Company`);
    } else {
      useErrorNotification(
        `Company was unable to be ${action}. Please contact support.`
      );
    }
  };

  const handleOpenDeleteModal = (companyId: string) => {
    setModalOpen(
      true,
      <ExperienceFormDeleteModal
        companyId={companyId}
        onClose={() => setModalOpen(false)}
        onSubmit={handleComplete}
      />
    );
  };

  const handleOpenAddModal = () => {
    setModalOpen(
      true,
      <ExperienceFormModal
        readOnly={false}
        title="Add New Company"
        onClose={() => setModalOpen(false)}
        onSubmit={handleComplete}
      />
    );
  };

  const handleOpenUpdateModal = (company: JobItem) => {
    setModalOpen(
      true,
      <ExperienceFormModal
        isEditing
        readOnly={false}
        title="Update A Company"
        inputs={company}
        onClose={() => setModalOpen(false)}
        onSubmit={handleComplete}
      />
    );
  };

  const handleOpenReadOnlyModal = (company: JobItem) => {
    setModalOpen(
      true,
      <ExperienceFormModal
        readOnly
        title={company.name}
        inputs={company}
        onClose={() => setModalOpen(false)}
      />
    );
  };

  if (loading) {
    return (
      <Page>
        <LoaderSpinner />
      </Page>
    );
  }

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" mt={2}>
        <Box
          bgcolor={theme.palette.navy.dark}
          width="100%"
          p={2}
          borderRadius={2}
        >
          <Box display="flex" justifyContent="end">
            <IconButton onClick={() => handleOpenAddModal()}>
              <Add />
            </IconButton>
          </Box>
          <List>
            <TransitionGroup>
              {companies.map((company: JobItem) => (
                <Collapse key={company?.name}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton
                          disabled={company.isReadOnly}
                          onClick={() => handleOpenUpdateModal(company)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          disabled={company.isReadOnly}
                          onClick={() => handleOpenDeleteModal(company?.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemText
                      primary={
                        <Button
                          color="primary"
                          sx={{ textTransform: "none" }}
                          onClick={() => handleOpenReadOnlyModal(company)}
                        >
                          <Typography variant="h5">{company?.name}</Typography>
                        </Button>
                      }
                      secondary={
                        <Typography
                          ml={1}
                          color={theme.palette.grey[500]}
                          variant="body2"
                        >
                          {`${new Date(
                            company?.startDate
                          )?.toLocaleDateString()} - ${
                            company.name === "GraVoc"
                              ? "Current"
                              : new Date(company?.endDate)?.toLocaleDateString()
                          }`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ExperienceList;
