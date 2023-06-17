import { Devices, GitHub, Handyman, LinkedIn, Person, Quiz, School } from "@mui/icons-material";

export const MENU_ITEMS = [
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
    location: "training",
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

export const SOCIAL_MEDIA_ITEMS = [
  {
    title: "Github",
    link: "https://github.com/chrisholmes1128",
    icon: <GitHub />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/christopher-holmes-59bb10a9/",
    icon: <LinkedIn />,
  },
];