import {
  ArrowBack,
  GitHub,
  Handyman,
  LinkedIn,
  School,
  Work,
} from "@mui/icons-material";

export const MENU_ITEMS = [
  {
    title: "Home",
    location: "home",
    icon: <ArrowBack />,
  },
  {
    title: "Experience",
    location: "experience",
    icon: <Work />,
  },
  {
    title: "Skills",
    location: "skills",
    icon: <Handyman />,
  },
  {
    title: "Training Completed",
    location: "training",
    icon: <School />,
  },
];

export const SOCIAL_MEDIA_ITEMS = [
  {
    title: "Github",
    link: "https://github.com/chrisholmes1128/Portfolio-Ts",
    icon: <GitHub />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/christopher-holmes-59bb10a9/",
    icon: <LinkedIn />,
  },
];
