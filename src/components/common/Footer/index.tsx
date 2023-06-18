import {
  Box,
  Container,
  Hidden,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Box p={3} pb={{ xs: 9, md: 3 }} component="footer">
          <Box
            px={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap={1} flexDirection="column">
              <Box display="flex" gap={2}>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  Help
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  Contact
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  Fees
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  Security
                </MuiLink>
              </Box>
              <Box display="flex" gap={2}>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  About
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      color: "#000000",
                    },
                  }}
                  underline="hover"
                  fontSize={13}
                  color="#545459"
                >
                  Developers
                </MuiLink>
              </Box>
            </Box>
            <MuiLink
              component={Link}
              href="#"
              sx={{
                ":hover": {
                  color: "#000000",
                },
              }}
              underline="hover"
              fontSize={13}
              color="#545459"
            >
              English
            </MuiLink>
          </Box>
          <Box
            mt={3}
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
            alignItems={{ xs: "start", sm: "center" }}
            justifyContent={{ xs: "start", sm: "end" }}
          >
            <Typography mb={{ xs: 1, sm: 0 }} fontSize={13} color="#545459">
              Copyright © 1999-2023 PayPal. All rights reserved
            </Typography>
            <Hidden smDown>
              <Box
                sx={{
                  backgroundColor: "#545459",
                  width: "1px",
                  height: 18,
                }}
              ></Box>
            </Hidden>
            <Box display="flex" gap={2}>
              <MuiLink
                component={Link}
                href="#"
                sx={{
                  ":hover": {
                    color: "#000000",
                  },
                }}
                underline="hover"
                fontSize={13}
                color="#545459"
              >
                Privacy
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                sx={{
                  ":hover": {
                    color: "#000000",
                  },
                }}
                underline="hover"
                fontSize={13}
                color="#545459"
              >
                Legal
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                sx={{
                  ":hover": {
                    color: "#000000",
                  },
                }}
                underline="hover"
                fontSize={13}
                color="#545459"
              >
                Policy updates
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
