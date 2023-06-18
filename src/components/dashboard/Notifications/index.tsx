import {
  Box,
  Divider,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import FlagIcon from "components/icons/FlagIcon";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface INotificationsProps {}

const Notifications: FunctionComponent<INotificationsProps> = () => {
  return (
    <Box>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontWeight={500} fontSize={20} color="#2c2e30">
          Notifications
        </Typography>
      </Box>
      <Box>
        <Paper
          sx={{
            p: 2,
          }}
        >
          <Box display="flex" alignItems="start" gap={2}>
            <Box
              bgcolor="rgb(255, 150, 0)"
              p={1}
              borderRadius="50%"
              display="flex"
            >
              <FlagIcon />
            </Box>
            <Typography mt={0.5} fontSize={15}>
              Link and confirm my debit or credit card
            </Typography>
          </Box>
          <Divider sx={{ borderStyle: "dashed", my: 2 }} />
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
            See details
          </MuiLink>
        </Paper>
      </Box>
    </Box>
  );
};

export default Notifications;
