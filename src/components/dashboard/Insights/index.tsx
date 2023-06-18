import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Link as MuiLink, Paper, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import MenuPopper from "./MenuPopper";
import Tooltip from "./Tooltip";

interface IInsightsProps {}

const Insights: FunctionComponent<IInsightsProps> = () => {
  return (
    <Box>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontWeight={400} fontSize={20} color="#2c2e30">
          Insights
        </Typography>
        <MenuPopper
          el={
            <Box
              sx={{ cursor: "pointer" }}
              display="flex"
              gap={1}
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#003087",
                  ":hover": {
                    color: "#003087",
                    textDecoration: "underline",
                  },
                }}
              >
                Last 7 days
              </Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          }
        />
      </Box>
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Typography mb={3} fontWeight={500} fontSize={18}>
          Money in
        </Typography>
        <Typography fontSize={30} color="#2c2e2f">
          0,00 €
        </Typography>
        <Tooltip
          placement="bottom-start"
          title={
            <Typography fontSize={13} color="#2c2e2f" p={1}>
              Includes sales of goods and services, money from friends and
              family, and transfers from other accounts
            </Typography>
          }
        >
          <Typography
            sx={{
              borderBottom: "1px dashed #687173",
              color: "#737c7f",
              fontSize: 15,
              cursor: "pointer",
            }}
            mb={3}
          >
            Total received
          </Typography>
        </Tooltip>
        <MuiLink
          component={Link}
          href="&"
          underline="hover"
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#0070ba",
            cursor: "pointer",
          }}
        >
          Request money
        </MuiLink>
      </Paper>
      <Paper
        sx={{
          mt: 3,
          p: 2,
        }}
      >
        <Typography mb={3} fontWeight={500} fontSize={18}>
          Money out
        </Typography>
        <Typography fontSize={30} color="#2c2e2f">
          0,00 €
        </Typography>
        <Tooltip
          placement="bottom-start"
          title={
            <Typography fontSize={13} color="#2c2e2f" p={1}>
              Includes payments made for goods and services, money sent to
              friends and family, transfers to other accounts, and other
              payments
            </Typography>
          }
        >
          <Typography
            sx={{
              borderBottom: "1px dashed #687173",
              color: "#737c7f",
              fontSize: 15,
              cursor: "pointer",
            }}
            mb={3}
          >
            Total sent or spent
          </Typography>
        </Tooltip>
        <MuiLink
          component={Link}
          href="&"
          underline="hover"
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#0070ba",
            cursor: "pointer",
          }}
        >
          Send Payments
        </MuiLink>
      </Paper>
    </Box>
  );
};

export default Insights;
