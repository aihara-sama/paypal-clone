import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  IconButton,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import MenuPopper from "./MenuPopper";

interface IBalanceProps {}

const Balance: FunctionComponent<IBalanceProps> = () => {
  return (
    <Paper
      sx={{
        p: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={500} fontSize={18}>
          Balance
        </Typography>
        <MenuPopper
          el={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
      </Box>
      <Typography fontSize={40} color="rgb(104, 113, 115)">
        €0,00 EUR*
      </Typography>
      <Typography fontSize={15} mb={1}>
        Available
      </Typography>
      <Box py={2} mb={1} px={1} bgcolor="rgb(242, 248, 252)" borderRadius="5px">
        <Box display="flex" alignItems="end">
          <Typography fontSize={15}>EUR</Typography>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(to right, rgb(157, 163, 166), rgb(157, 163, 166) 33%, transparent 34%)",
              backgroundPosition: "center top",
              backgroundRepeat: "repeat-x",
              backgroundSize: "0.1875rem 0.0625rem",
              flexGrow: 1,
              height: "0.0625rem",
              margin: "5px 0px",
            }}
          ></Box>
          <Typography fontSize={15}>0,00 €</Typography>
        </Box>
        <Box display="flex" alignItems="end">
          <Typography fontSize={15}>USD</Typography>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(to right, rgb(157, 163, 166), rgb(157, 163, 166) 33%, transparent 34%)",
              backgroundPosition: "center top",
              backgroundRepeat: "repeat-x",
              backgroundSize: "0.1875rem 0.0625rem",
              flexGrow: 1,
              height: "0.0625rem",
              margin: "5px 0px",
            }}
          ></Box>
          <Typography fontSize={15}>0,00 US$</Typography>
        </Box>
      </Box>
      <Typography fontSize={11} mb={3}>
        *This is an estimate based on the most recent conversion rate.
      </Typography>
      <MuiLink
        component={Link}
        href="&"
        underline="hover"
        sx={{
          fontSize: 15,
          fontWeight: 700,
          color: "#003087",
          ":hover": {
            color: "#003087",
          },
          cursor: "pointer",
        }}
      >
        Set up auto transfers
      </MuiLink>
    </Paper>
  );
};

export default Balance;
