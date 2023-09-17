import { Box, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { SKILLS } from "../constants";
import ModalWrapper from "../../components/ModalWrapper";
import { useGlobalModal } from "../../contexts/ModalContext";

function SkillsPage() {
  const { setModalOpen } = useGlobalModal();
  // await getSkills when apollo is added

  const handleOpenModal = (title: string) => {
    setModalOpen(
      true,
      <ModalWrapper title={title} onComplete={() => setModalOpen(false)} />
    );
  };

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
          <Grid item xs={3} mt={6} key={skill.title}>
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
    </Box>
  );
}

export default SkillsPage;
