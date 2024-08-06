import { Box } from "@mui/system";
import BitcoinRatesCustom from "../components/BitcoinRatesCustom";

export const BitcoinRates = () => {
  // STATES / VAR

  // FUNCTIONS

  //RETURN
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      width={"inherit"}
      height={"inherit"}
      p={2}
    >
      <BitcoinRatesCustom />
    </Box>
  );
};
