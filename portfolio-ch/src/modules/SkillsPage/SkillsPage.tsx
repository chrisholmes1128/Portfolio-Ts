import { Box, Grid, useTheme } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { SKILLS } from "../constants";


function SkillsPage() {
  const theme = useTheme();
  // await getSkills when apollo is added

  // const handleClickImageCard = () => {

  // };

  return (
    <Box width="100%" height="40rem" mt={2}>
      <Grid
        container
        xs={12}
        display="flex"
        direction="row"
        justifyContent="start"
      >
        {SKILLS.map((skill) => (
          <Grid item xs={3} mt={6}>
            <ImageCard
              title={skill.title}
              imageSource={skill.image}
              height={skill.height}
              width={skill.width}
              // handleClick={handleClickImageCard}
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
