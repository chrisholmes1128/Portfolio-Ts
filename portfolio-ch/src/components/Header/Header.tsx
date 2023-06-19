import { Box, Typography, useTheme } from "@mui/material";

interface IHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function Header({title, children}: IHeaderProps) { // add title and children as props
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.navy.dark}
      width="100%"
      borderRadius={"0.5rem"}
      mr={1}
    >
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
        <Typography variant="h3" color="common.white">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
