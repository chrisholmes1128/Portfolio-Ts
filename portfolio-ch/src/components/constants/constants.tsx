import {
  Devices,
  GitHub,
  Handyman,
  LinkedIn,
  Quiz,
  School,
} from "@mui/icons-material";

export const MENU_ITEMS = [
  // Add Home Welcome Page
  {
    title: "Experience",
    location: "experience",
    icon: <School />,
  },
  {
    title: "Skills",
    location: "skills",
    icon: <Handyman />,
  },
  {
    title: "Training Completed",
    location: "training",
    icon: <Quiz />,
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
