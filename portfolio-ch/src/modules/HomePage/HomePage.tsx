import { Box, Grid, Grow, Typography, useTheme } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";
import { fullBgImage, bottomBgImage, ProfilePic } from "../../assets/images";
import { SKILLS } from "../constants";
import { HomePageButton, HomePageColumn } from "./components";

interface IHomePageProps {
  onEnter: () => void;
}

function HomePage({ onEnter }: IHomePageProps) {
  const ref = useRef(null);
  const theme = useTheme();
  const isMobile = isCurrentDeviceMobile();
  const fontSize = isMobile ? 50 : 80;
  const marginTop = isMobile ? 3.5 : 10;
  const alignment = isMobile ? "start" : "center";
  const gridTemplateColumns = isMobile ? "1fr" : "1fr 1fr 1fr";

  const frontendSkills = SKILLS.filter(
    (skill) =>
      skill.title === "React" ||
      skill.title === "TypeScript" ||
      skill.title === "Material UI"
  );
  const graphQLSkill = SKILLS.filter((skill) => skill.title === "GraphQL");
  const backendSkills = SKILLS.filter(
    (skill) => skill.title === "MongoDB" || skill.title === "Node.js"
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Parallax pages={isMobile ? 3.3 : 2.3} ref={ref}>
        <ParallaxLayer speed={2} style={{ zIndex: 15 }}>
          <Box display="flex" justifyContent={alignment} mt={marginTop} ml={2}>
            <Grow in={true} {...{ timeout: 1000 }}>
              <Typography fontSize={fontSize} color="common.white">
                Welcome To My Portfolio
              </Typography>
            </Grow>
          </Box>
          <Box display="flex" justifyContent={alignment} ml={2}>
            <Typography textAlign="center" fontSize={25} color="common.white">
              Scroll down to learn more or click the button below to checkout my
              Dashboard!
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={8}
          style={{
            backgroundImage: `url(${fullBgImage})`,
            backgroundSize: "cover",
            zIndex: 5,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={8}
          offset={0}
          style={{
            backgroundImage: `url(${bottomBgImage})`,
            backgroundSize: "cover",
            zIndex: 20,
          }}
        >
          <HomePageButton onEnter={onEnter} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <Box bgcolor={theme.palette.navy.dark} p={1} pb={10}>
            <Box display="flex" justifyContent="center">
              <Box
                sx={{
                  background: `url(${ProfilePic})`,
                  backgroundSize: "cover",
                  width: "18rem",
                  height: "18rem",
                  borderRadius: "10rem",
                  border: `2px solid white`,
                  marginTop: "-8rem",
                  zIndex: 5,
                }}
              />
              <Box
                bgcolor={theme.palette.navy.dark}
                width="20rem"
                height="20rem"
                marginTop="-9rem"
                position="absolute"
                sx={{ zIndex: 0, borderRadius: "10rem" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Typography color="primary" fontSize={30}>
                Christopher Holmes
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" mt={1}>
              <Typography color="common.white" fontSize={24}>
                Full Stack Developer
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" width="100%">
              <Box mt={2} width={isMobile ? "90%" : "70%"}>
                <Typography
                  textAlign="center"
                  color="common.white"
                  fontSize={18}
                >
                  Thanks for taking the time to checkout my portfolio! I am a
                  passionate Full Stack Developer with a focus on frontend
                  design who can also deploy backend changes as well. At my
                  current job, I am exposed to an abundance of different
                  projects which in turn allowed me to gain invaluable
                  experience with the most desirable web solutions.
                </Typography>
              </Box>
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Box bgcolor={theme.palette.navy.dark} p={1}>
            <Box display="flex" justifyContent="center" mt={2}>
              <Typography textAlign="center" color="primary" fontSize={40}>
                Portfolio Application Stack
              </Typography>
            </Box>
            <Grid
              container
              gridTemplateColumns={gridTemplateColumns}
              spacing={4}
              p={2}
            >
              <HomePageColumn
                isMobile={isMobile}
                title="Frontend Technologies"
                items={frontendSkills}
                info="To provide a modern and reliable application, this web app
                    utilizes React along with TypeScript. In order to keep
                    client side code clean and bug free, reusable components
                    were created and tested. This includes reusable inputs which
                    may need to be used across the application. Being able to
                    quickly import a pre-built component also helps with
                    speeding up future development and makes it simpler to read.
                    With this approach, very few libraries are required to
                    support the web app which helps reduce overall complexity
                    and the amount of time it takes to build the application
                    before deploying any updates."
              />
              <HomePageColumn
                isMobile={isMobile}
                title="GraphQL"
                items={graphQLSkill}
                info="I choose to use GraphQL in my Portfolio to demonstrate the
              power of this query language. This requires a litle more
              time up front for initial setup, however the advantages of
              this modern query run time engine make it worth it! Some of
              those advantages are only getting the data you need for a
              particular request. Imagine you are making a traditional GET
              request, you might end up with 20+ other fields you don't
              need to use. GraphQL solves this issue with declaritive data
              fetching which will only return the data fields you ask for.
              In other words, this means no more over or under fetching
              data!"
              />
              <HomePageColumn
                isMobile={isMobile}
                title="Backend Technologies"
                items={backendSkills}
                info="This web application uses Node.js with Express to help
              manage the Apollo Server which in turn allows for data to be
              created, read, updated, or deleted from MongoDB."
              />
            </Grid>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
