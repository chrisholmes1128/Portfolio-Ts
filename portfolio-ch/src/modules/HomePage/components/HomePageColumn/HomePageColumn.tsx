import { Box, Grid, Typography, useTheme } from "@mui/material";
import ImageCard from "../../../../components/ImageCard";
import { isCurrentDeviceMobile } from "../../../../utils/isCurrentDeviceMobile";
import HomePageColumnMobile from "../HomePageColumnMobile";

interface Item {
  image: any;
  title: string;
  height: string;
  width: string;
  experienceInYears: string;
}

interface IHomePageColumnProps {
  title: string;
  items: Item[];
  info?: string;
  isMobile: boolean;
}

function HomePageColumn({
  title,
  info,
  items,
  isMobile,
}: IHomePageColumnProps) {
  const theme = useTheme();

  if (isMobile) {
    return <HomePageColumnMobile title={title} info={info} items={items} />;
  }

  return (
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
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        {items.map((item) => (
          <Box ml={4} mr={4} key={item.title}>
            <ImageCard
              title={item.title}
              imageSource={item.image}
              height={item.height}
              width={item.width}
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
            {info}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default HomePageColumn;
