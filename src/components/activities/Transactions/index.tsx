import { Box, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";

const Transactions = () => {
  return (
    <Box bgcolor="#f5f7fa" py={4} mt="282px">
      <Box
        height={400}
        bgcolor="#fff"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" top="10px" right="15px">
          <MuiLink
            component={Link}
            href="&"
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0070ba",
              cursor: "pointer",
            }}
          >
            Download
          </MuiLink>
        </Box>
        <Typography color="000000a6">
          There are no transactions for this date range.
        </Typography>
      </Box>
    </Box>
  );
};

export default Transactions;
