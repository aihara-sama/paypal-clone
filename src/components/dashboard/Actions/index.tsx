import { Box, Paper, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

interface IActionsProps {}

const Actions: FunctionComponent<IActionsProps> = () => {
  return (
    <Box>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontWeight={400} fontSize={20} color="#2c2e30">
          Actions
        </Typography>
      </Box>
      <Box display="flex" gap={2}>
        <Paper
          sx={{
            p: 2,
            flex: 1,
          }}
        >
          <Typography fontWeight={500} fontSize={18}>
            Send Money
          </Typography>
        </Paper>
        <Paper
          sx={{
            p: 2,
            flex: 1,
          }}
        >
          <Typography fontWeight={500} fontSize={18}>
            Request Money
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Actions;
