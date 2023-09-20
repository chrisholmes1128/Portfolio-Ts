import {
  Devices,
  GitHub,
  Handyman,
  House,
  LinkedIn,
  Quiz,
  School,
} from "@mui/icons-material";

export const MENU_ITEMS = [
  {
    title: "Home",
    location: "home",
    icon: <House />,
  },
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
