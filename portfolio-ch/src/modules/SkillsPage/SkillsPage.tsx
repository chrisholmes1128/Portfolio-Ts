import { Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { SKILLS } from "../constants";
import Page from "../../components/Page";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

function SkillsPage() {
  const isMobile = isCurrentDeviceMobile();

  return (
    <Page>
      <Grid
        container
        xs={12}
        display="flex"
        direction="row"
        justifyContent="start"
        mt={-2}
        height="100%"
      >
        {SKILLS.map((skill) => (
          <Grid item xs={isMobile ? 6 : 3} mt={6} key={skill.title}>
            <ImageCard
              title={skill.title}
              info={`${skill.experienceInYears} Years`}
              imageSource={skill.image}
              height={skill.height}
              width={skill.width}
            />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export default SkillsPage;
