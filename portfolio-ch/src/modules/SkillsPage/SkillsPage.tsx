import { Box, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { SKILLS } from "../constants";
import ModalWrapper from "../EducationPage/components/ExperienceFormModal";
import { useGlobalModal } from "../../contexts/ModalContext";
import Page from "../../components/Page";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

function SkillsPage() {
  const { setModalOpen } = useGlobalModal();
  // await getSkills when apollo is added

  const isMobile = isCurrentDeviceMobile();

  const handleOpenModal = (title: string) => {
    setModalOpen(
      true,
      <ModalWrapper title={title} onComplete={() => setModalOpen(false)} />
    );
  };

  return (
    <Page>
      <Grid
        container
        xs={12}
        display="flex"
        direction="row"
        justifyContent="start"
        spacing={0}
      >
        {SKILLS.map((skill) => (
          <Grid item xs={isMobile ? 6 : 3} mt={6} key={skill.title}>
            <ImageCard
              title={skill.title}
              imageSource={skill.image}
              height={skill.height}
              width={skill.width}
              handleClick={() => handleOpenModal(skill.title)}
            />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export default SkillsPage;
