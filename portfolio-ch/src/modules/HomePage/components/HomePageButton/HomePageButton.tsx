import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IHomePageButtonProps {
  onEnter: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function HomePageButton({ onEnter }: IHomePageButtonProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/experience");
    onEnter();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bottom={0}
      sx={actionButtons}
    >
      <Button
        sx={{
          textTransform: "none",
          width: "15rem",
          height: "3rem",
        }}
        color="secondary"
        variant="contained"
        onClick={() => handleNavigate()}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography fontWeight={600}>Enter the Dashboard</Typography>
          <ArrowForward />
        </Box>
      </Button>
    </Box>
  );
}

export default HomePageButton;
