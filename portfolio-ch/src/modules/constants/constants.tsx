import {
  ReactLogo,
  JavascriptLogo,
  MUILogo,
  GraphqlLogo,
  TypescriptLogo,
} from "../../assets/images";

export const COURSES = [
  "Honors Data Structures & Algorithms",
  "Pega Systems Architect",
  "VR App Development",
  "Computer Security",
  "Software Engineer Lab I & II",
  "UNIX Programming",
  "Analysis of Algorithms",
  "Embedded Systems",
  "Computer Software & Operating Systems",
  "Computer Networks",
  "Physics I & II",
  "Calculus I & II",
];

export const RESUME_PDF =
  "./src/assets/files/Christopher_Holmes_Resume_2023.pdf";

export const SKILLS = [
  // add links to websites that opens new window
  { image: ReactLogo, title: "React", height: "5rem", width: "6rem" },
  { image: GraphqlLogo, title: "GraphQL", height: "5rem", width: "5rem" },
  {
    image: TypescriptLogo,
    title: "Typescript",
    height: "5rem",
    width: "5rem",
  },
  {
    image: JavascriptLogo,
    title: "Javascript",
    height: "5rem",
    width: "5rem",
  },
  {
    image: MUILogo,
    title: "Material UI",
    height: "5rem",
    width: "5rem",
  },
];

export const INITIAL_JOB_ITEMS = [
  {
    id: "1",
    name: "Gravoc",
    info: "",
    startDate: new Date("05/16/2022"),
    endDate: new Date(),
  },
  {
    id: "2",
    name: "C Squared Systems",
    info: "",
    startDate: new Date("08/05/2021"),
    endDate: new Date("05/08/2022"),
  },
  {
    id: "3",
    name: "Blackburn Labs",
    info: "",
    startDate: new Date("07/02/2020"),
    endDate: new Date("07/25/2021"),
  },
];
