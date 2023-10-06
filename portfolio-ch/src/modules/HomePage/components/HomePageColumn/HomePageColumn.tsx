import { Box, Grid, Typography, useTheme } from "@mui/material";
import ImageCard from "../../../../components/ImageCard";
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
      >
        <Typography color="common.white" fontSize={28} fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
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
      <Box display="flex" height="100%" justifyContent="center" mt={2}>
        <Box display="flex" p={2} borderRadius={2}>
          <Typography
            color="common.white"
            textAlign="center"
            variant="h4"
            lineHeight={2}
          >
            {info}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default HomePageColumn;
