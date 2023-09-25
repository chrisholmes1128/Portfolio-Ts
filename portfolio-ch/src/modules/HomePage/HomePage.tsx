import { Box, Button, Grow, Typography, useTheme } from "@mui/material";
import Page from "../../components/Page";
import { useNavigate } from "react-router-dom";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Ref, useRef } from "react";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

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
  const ref = useRef<Ref<IParallax> | undefined>();

  const handleNavigate = () => {
    navigate("/experience");
    onEnter();
  };

  const isMobile = isCurrentDeviceMobile();
  const fontSize = isMobile ? 50 : 80;
  const marginTop = isMobile ? 10 : 30;
  const alignment = isMobile ? "start" : "center";
  const buttonAlignment = isMobile ? "center" : "end";

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Parallax pages={3} ref={ref}>
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
            backgroundImage: "url(/src/assets/images/full-mountain-image.png)",
            backgroundSize: "cover",
            zIndex: 5,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={8}
          offset={0}
          style={{
            backgroundImage: "url(/src/assets/images/bottom-mountains.png)",
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
