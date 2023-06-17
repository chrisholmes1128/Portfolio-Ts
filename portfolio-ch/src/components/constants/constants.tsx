import { Devices, Handyman, Person, Quiz, School } from "@mui/icons-material";

const MENU_ITEMS = [
  {
    title: "Education",
    location: "education",
    icon: <School />,
  },
  {
    title: "Skills",
    location: "skills",
    icon: <Handyman />,
  },
  {
    title: "Trainings Completed",
    location: "trainings",
    icon: <Quiz />,
  },
  {
    title: "About Me",
    location: "about",
    icon: <Person />,
  },
  {
    title: "Portfolio Application Tech Stack",
    location: "portfolio",
    icon: <Devices />,
  },
];

export default MENU_ITEMS;