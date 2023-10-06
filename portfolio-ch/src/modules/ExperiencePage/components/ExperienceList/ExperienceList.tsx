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

import { Add, Delete as DeleteIcon, Edit } from "@mui/icons-material";

import { TransitionGroup } from "react-transition-group";
import { useGlobalModal } from "../../../../contexts/ModalContext";
import ExperienceFormModal from "../ExperienceFormModal";
import { GET_COMPANIES } from "../../graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import Page from "../../../../components/Page";
import ExperienceFormDeleteModal from "../ExperienceFormDeleteModal";

interface JobItem {
  id: string;
  name: string;
  info: string;
  startDate: string;
  endDate: string;
}

function ExperienceList() {
  const { setModalOpen } = useGlobalModal();
  const theme = useTheme();

  const { data, loading } = useQuery(GET_COMPANIES);

  const [companies, setCompanies] = useState<JobItem[]>([]);

  useEffect(() => {
    if (data?.getCompanies) {
      console.log(data);
      setCompanies(data?.getCompanies);
    }
  }, [data?.getCompanies]);

  const handleOpenDeleteModal = (companyId: string) => {
    setModalOpen(
      true,
      <ExperienceFormDeleteModal
        companyId={companyId}
        onComplete={() => setModalOpen(false)}
      />
    );
  };

  const handleOpenAddModal = () => {
    setModalOpen(
      true,
      <ExperienceFormModal
        readOnly={false}
        title="Add New Company"
        onComplete={() => setModalOpen(false)}
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
        onComplete={() => setModalOpen(false)}
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
        onComplete={() => setModalOpen(false)}
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
                          onClick={() => handleOpenUpdateModal(company)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
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
                          )?.toLocaleDateString()} - ${new Date(
                            company?.endDate
                          )?.toLocaleDateString()}`}
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
