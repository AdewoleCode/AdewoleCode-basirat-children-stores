import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            BasiratStores
          </Typography>
          <div>
           Leaders of affordable, latest and quality children wears, for both males and females under the
           years of 16. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Why shop with us?
          </Typography>
          <Typography mb="30px">Delivery to anywhere across the country</Typography>
          <Typography mb="30px">cheapest prices</Typography>
          <Typography mb="30px">Highest quality wears</Typography>
          <Typography mb="30px">Helpful, attentive customer service</Typography>
          <Typography mb="30px">Available evryday, 8 - 6</Typography>

        </Box>
{/* 
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box> */}

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            19 pedro street, lagos island, Lagos, Nigeria
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: basiratStores@gmail.com
          </Typography>
          <Typography mb="30px">phone: 08023458985</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;