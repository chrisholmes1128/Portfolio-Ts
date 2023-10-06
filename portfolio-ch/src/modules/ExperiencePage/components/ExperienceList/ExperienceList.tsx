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
import { DELETE_COMPANY, GET_COMPANIES } from "../../graphql";
import { useMutation, useQuery } from "@apollo/client";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import Page from "../../../../components/Page";

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
  const [deleteCompany] = useMutation(DELETE_COMPANY);

  const [items, setItems] = useState<JobItem[]>([]);

  useEffect(() => {
    if (data?.getCompanies) {
      console.log(data);
      setItems(data?.getCompanies);
    }
  }, [data?.getCompanies]);

  const handleRemoveItem = async (id: string) => {
    await deleteCompany({
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GET_COMPANIES,
        },
      ],
      awaitRefetchQueries: true,
    });
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

  const handleOpenUpdateModal = (item: JobItem) => {
    setModalOpen(
      true,
      <ExperienceFormModal
        isEditing
        readOnly={false}
        title="Update Company"
        inputs={item}
        onComplete={() => setModalOpen(false)}
      />
    );
  };

  const handleOpenReadOnlyModal = (item: JobItem) => {
    setModalOpen(
      true,
      <ExperienceFormModal
        readOnly
        title={item.name}
        inputs={item}
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
              {items.map((item: JobItem) => (
                <Collapse key={item?.name}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton onClick={() => handleOpenUpdateModal(item)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveItem(item?.id)}>
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
                          onClick={() => handleOpenReadOnlyModal(item)}
                        >
                          <Typography variant="h5">{item?.name}</Typography>
                        </Button>
                      }
                      secondary={
                        <Typography
                          ml={1}
                          color={theme.palette.grey[500]}
                          variant="body2"
                        >
                          {`${new Date(
                            item?.startDate
                          )?.toLocaleDateString()} - ${new Date(
                            item?.endDate
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
