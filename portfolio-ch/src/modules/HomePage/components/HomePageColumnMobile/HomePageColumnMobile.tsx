import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import ImageCard from "../../../../components/ImageCard";

interface Item {
  image: any;
  title: string;
  height: string;
  width: string;
  experienceInYears: string;
}

interface IHomePageColumnMobileProps {
  title: string;
  items: Item[];
  info?: string;
}

function HomePageColumnMobile({
  title,
  info,
  items,
}: IHomePageColumnMobileProps) {
  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="center" width="100%" mt={5}>
        <Typography color="common.white" fontSize={32} fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        {items.map((item) => (
          <Box ml={1} mr={1} key={item.title}>
            <ImageCard
              title={item.title}
              imageSource={item.image}
              height="4rem"
              width="4rem"
            />
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Box p={2} borderRadius={2} width="100%">
          <Typography
            color="common.white"
            textAlign="center"
            variant="h4"
            lineHeight={1.25}
          >
            {info}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default HomePageColumnMobile;
