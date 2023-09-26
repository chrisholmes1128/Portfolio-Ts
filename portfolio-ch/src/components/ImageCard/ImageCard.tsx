import { Box, Button, Typography, useTheme } from "@mui/material";

interface ICardProps {
  title: string;
  info?: string;
  imageSource: string;
  height: string;
  width: string;
  handleClick?: () => void;
}

export default function ImageCard({
  title,
  info,
  imageSource,
  height,
  width,
  handleClick,
}: ICardProps) {
  const theme = useTheme();
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button sx={{ width: "6rem", height: "6rem" }} onClick={handleClick}>
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
        <Typography variant="h5" color="common.white" mt={1}>
          {title}
        </Typography>
      </Box>
      {info && (
        <Box display="flex" justifyContent="center" mt={-1}>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.grey[500] }}
            mt="1rem"
          >
            Experience: {info}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
