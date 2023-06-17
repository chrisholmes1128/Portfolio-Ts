import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");

  const handleMenuItemClick = (title: string) => {
    console.log(title);
    setTitle(title)
  };

  return (
    <Box display="flex" width="100%">
      <Box>
        <Sidebar
          handleMenuItemClick={handleMenuItemClick}
          open={isOpen}
          width="22rem"
          setOpen={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box width="100%" ml={2} mr={4}>
        <Header />
        <PageTitle title={title}/>
      </Box>
    </Box>
  );
}

export default DashboardPage;
