import { Box, Grid, useTheme } from "@mui/material";
import ImageCard from "../../components/ImageCard";

import {
  ReactLogo,
  JavascriptLogo,
  MUILogo,
  GraphqlLogo,
  TypescriptLogo,
} from "../../assets/images";

function SkillsPage() {
  const theme = useTheme();
  // await getSkills when apollo is added
  const skills = [
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

  return (
    <Box width="100%" height="40rem" mt={2}>
      <Grid
        container
        xs={12}
        display="flex"
        direction="row"
        justifyContent="start"
      >
        {skills.map((skill) => (
          <Grid item xs={3} mt={6}>
            <ImageCard
              title={skill.title}
              imageSource={skill.image}
              height={skill.height}
              width={skill.width}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="1rem"
        ml="auto"
        mr="auto"
        maxWidth="50rem"
      > */}
    </Box>
  );
}

export default SkillsPage;
