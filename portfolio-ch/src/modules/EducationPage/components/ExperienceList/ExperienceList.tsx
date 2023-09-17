import { useState } from "react";
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

import {
  Delete as DeleteIcon,
  Edit,
  SentimentSatisfiedOutlined as HappyIcon,
} from "@mui/icons-material";

import { TransitionGroup } from "react-transition-group";
import { INITIAL_JOB_ITEMS } from "../../../constants";
import { useGlobalModal } from "../../../../contexts/ModalContext";
import ModalWrapper from "../../../../components/ModalWrapper";
import { ExperienceForm } from "..";

interface JobItem {
  id: string;
  companyName: string;
  info: string;
  startDate: Date;
  endDate: Date;
}

function ExperienceList() {
  const [items, setItems] = useState<JobItem[]>(INITIAL_JOB_ITEMS);
  const [newItem, setNewItem] = useState<JobItem>({
    id: "1",
    companyName: "",
    info: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const { setModalOpen } = useGlobalModal();
  const theme = useTheme();

  const handleSubmit = () => {
    const itemWithId = {
      ...newItem,
      id: String(Number(items[items.length - 1].id) + 4),
    };
    setItems([...items, itemWithId]);
    setModalOpen(false);
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => [...prev.filter((i) => i.id !== id)]);
  };

  const handleChangeNewItem = (item: JobItem) => {
    console.log(item);
    setNewItem(item);
  };

  const handleAddItem = () => {
    setModalOpen(
      true,
      <ModalWrapper
        content={<ExperienceForm onChange={handleChangeNewItem} />}
        readOnly={false}
        title="Add New Company"
        onComplete={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    );
  };

  const handleUpdateItem = (item: JobItem) => {
    setModalOpen(
      true,
      <ModalWrapper
        content={
          <ExperienceForm inputs={item} onChange={handleChangeNewItem} />
        }
        readOnly={false}
        title="Update Company"
        onComplete={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    );
  };

  return (
    <Box zIndex={1}>
      <Box display="flex" justifyContent="center" mt={4} zIndex={1}>
        <Button
          color="primary"
          variant="outlined"
          sx={{ textTransform: "none", zIndex: 1 }}
          onClick={() => handleAddItem()}
        >
          <Typography mr={2}>Add Your Company to the List!</Typography>
          <HappyIcon />
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Box
          bgcolor={theme.palette.navy.dark}
          width="50%"
          p={2}
          borderRadius={2}
        >
          <List>
            <TransitionGroup>
              {items.map((item: JobItem) => (
                <Collapse key={item.companyName}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton onClick={() => handleUpdateItem(item)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemText
                      primary={
                        <Typography color="common.white" variant="h5">
                          {item.companyName}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          color={theme.palette.grey[500]}
                          variant="body2"
                        >
                          {`${item.startDate.toLocaleDateString()} - ${item.endDate.toLocaleDateString()}`}
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
    </Box>
  );
}

export default ExperienceList;
