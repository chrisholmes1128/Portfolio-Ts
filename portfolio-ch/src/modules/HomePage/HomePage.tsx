import {
  Box,
  Button,
  Collapse,
  Grid,
  Link,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";
import { fullBgImage, bottomBgImage } from "../../assets/images";
import ImageCard from "../../components/ImageCard";
import { SKILLS } from "../constants";

interface IHomePageProps {
  onEnter: () => void;
}

const actionButtons = {
  position: "absolute",
  bottom: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

function HomePage({ onEnter }: IHomePageProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleNavigate = () => {
    navigate("/experience");
    onEnter();
  };

  const isMobile = isCurrentDeviceMobile();
  const fontSize = isMobile ? 50 : 80;
  const marginTop = isMobile ? 8 : 25;
  const alignment = isMobile ? "start" : "center";

  const frontendSkills = SKILLS.filter(
    (skill) =>
      skill.title === "React" ||
      skill.title === "TypeScript" ||
      skill.title === "Material UI"
  );
  const apiSkills = SKILLS.filter((skill) => skill.title === "GraphQL");
  const backendSkills = SKILLS.filter(
    (skill) => skill.title === "MongoDB" || skill.title === "Node.js"
  );

  // 3 columns for desktop
  // 1 column for mobile

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer speed={2} style={{ zIndex: 15 }}>
          <Box display="flex" justifyContent={alignment} mt={marginTop} ml={2}>
            <Typography fontSize={fontSize} color="common.white">
              Welcome To My Portfolio
            </Typography>
          </Box>
          <Box display="flex" justifyContent={alignment} ml={2}>
            <Typography fontSize={25} color="common.white">
              Scroll down to learn more
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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bottom={0}
            sx={actionButtons}
          >
            <Button
              sx={{
                textTransform: "none",
                width: "15rem",
                height: "3rem",
              }}
              color="secondary"
              variant="contained"
              onClick={() => handleNavigate()}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography fontWeight={600}>Enter the Dashboard</Typography>
                <ArrowForward />
              </Box>
            </Button>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Grid container gridTemplateColumns="1fr 1fr 1fr" spacing={4} p={2}>
            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="5rem"
                width="100%"
                mt={40}
              >
                <Typography color="common.white" fontSize={50} fontWeight={500}>
                  Front End Technologies
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                {frontendSkills.map((skill) => (
                  <Box ml={4} mr={4}>
                    <ImageCard
                      title={skill.title}
                      imageSource={skill.image}
                      height={skill.height}
                      width={skill.width}
                    />
                  </Box>
                ))}
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Box
                  border={`2px solid ${theme.palette.common.white}`}
                  p={2}
                  borderRadius={2}
                  width="100%"
                  height="36rem"
                >
                  <Typography color="common.white" variant="h3" lineHeight={2}>
                    To provide a modern and reliable application, this web app
                    utilizes React along with TypeScript. In order to keep
                    client side code clean and bug free, reusable components
                    were created and tested. This includes reusable inputs which
                    may need to be used across the application. Being able to
                    quickly import a pre-built component also helps with
                    speeding up future development and makes it simpler to read.
                    With this approach, very few libraries are required to
                    support the web app which helps reduce overall complexity
                    and the amount of time it takes to build the application
                    before deploying any updates.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="5rem"
                width="100%"
                mt={40}
              >
                <Typography color="common.white" fontSize={50} fontWeight={500}>
                  GraphQL
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                {apiSkills.map((skill) => (
                  <Box ml={4} mr={4}>
                    <ImageCard
                      title={skill.title}
                      imageSource={skill.image}
                      height={skill.height}
                      width={skill.width}
                    />
                  </Box>
                ))}
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Box
                  border={`2px solid ${theme.palette.common.white}`}
                  p={2}
                  borderRadius={2}
                  width="100%"
                  height="36rem"
                >
                  <Typography color="common.white" variant="h3" lineHeight={2}>
                    I choose to use GraphQL in my Portfolio to demonstrate the
                    power of this query language. This requires a litle more
                    time up front for initial setup, however the advantages of
                    this modern query run time engine make it worth it! Some of
                    those advantages are only getting the data you need for a
                    particular request. Imagine you are making a traditional GET
                    request, you might end up with 20+ other fields you don't
                    need to use. GraphQL solves this issue with declaritive data
                    fetching which will only return the data fields you ask for.
                    In other words, this means no more over or under fetching
                    data!
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="5rem"
                width="100%"
                mt={40}
              >
                <Typography color="common.white" fontSize={50} fontWeight={500}>
                  Back End Technologies
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                {backendSkills.map((skill) => (
                  <Box ml={4} mr={4}>
                    <ImageCard
                      title={skill.title}
                      imageSource={skill.image}
                      height={skill.height}
                      width={skill.width}
                    />
                  </Box>
                ))}
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Box
                  border={`2px solid ${theme.palette.common.white}`}
                  p={2}
                  borderRadius={2}
                  width="100%"
                  height="36rem"
                >
                  <Typography color="common.white" variant="h3" lineHeight={2}>
                    This web application uses Node.js with Express to help
                    manage the Apollo Server which in turn allows for data to be
                    created, read, updated, or deleted from MongoDB. In the
                    production environment, the requests may seem slow at first
                    due to the initial spin up of the server which is hosted by
                    Render due to being on a free tier. Feel free to learn more
                    about them{" "}
                    <Link href="https://render.com/" color="inherit">
                      here!
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

{
  /* <Box
        width="100vw"
        height="40vh"
        sx={{
          background: `linear-gradient(180deg,${theme.palette.navy.dark} , ${theme.palette.primary.dark})`,
        }}
      >
        <Box
          display="flex"
          padding={2}
          justifyContent="center"
          alignItems="center"
          height="15vh"
        >
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 1000 }}
          >
            <Box>
              <Typography fontSize={50} color="common.white">
                Welcome To My Portfolio.
              </Typography>
            </Box>
          </Grow>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            sx={{
              textTransform: "none",
              width: "15rem",
              height: "3rem",
              color: theme.palette.common.white,
              backgroundColor: theme.palette.secondary.light,
              borderRadius: "0.5rem",
            }}
            variant="outlined"
            color="primary"
            onClick={() => handleNavigate()}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography>Enter the Dashboard</Typography>
              <ArrowForward />
            </Box>
          </Button>
        </Box>
      </Box> */
}

export default HomePage;
