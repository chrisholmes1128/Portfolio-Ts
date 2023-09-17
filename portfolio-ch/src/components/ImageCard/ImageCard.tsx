import { Box, Button, Typography } from "@mui/material";

interface ICardProps {
  title: string;
  imageSource: string;
  height: string;
  width: string;
  handleClick?: () => void;
}

export default function ImageCard({
  title,
  imageSource,
  height,
  width,
  handleClick,
}: ICardProps) {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button sx={{ width: "7rem", height: "7rem" }} onClick={handleClick}>
          <Box
            component="img"
            display="block"
            src={imageSource}
            height={height}
            width={width}
          />
        </Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5" color="common.white" mt="1rem">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
