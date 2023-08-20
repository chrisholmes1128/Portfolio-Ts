import { Box, Stack, Typography, useTheme } from "@mui/material";

interface ICardProps {
  title: string;
  imageSource: string;
  height: string;
  width: string;
}

export default function ImageCard({ title, imageSource, height, width }: ICardProps) {
  // add title and children as props
  const theme = useTheme();

  return (
    <Stack display="flex" alignItems="center" justifyContent="center">
      <Box component="img" src={imageSource} height={height} width={width}></Box>
      <Typography variant="h4" color="common.white" mt="1rem">
        {title}
      </Typography>
    </Stack>
  );
}
