import { Box, Typography } from "@mui/material";

export const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <Box
        display="flex"
        position={"static"}
        bottom={0}
        bgcolor="primary.main"
        justifyContent={"right"}
        px={"20px"}
      >
        <Typography
          variant="subtitle1"
          fontSize={"small"}
          color="primary.light"
          alignContent={"center"}
        >
          Template designed by someone during an IoD class - {currentDate}
        </Typography>
      </Box>
    </footer>
  );
};
