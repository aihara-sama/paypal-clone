import { Box, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { format, subMonths } from "date-fns";
import type { FunctionComponent } from "react";
import { useState } from "react";

interface IProps {
  onApply: (date: string) => void;
}

const RangePicker: FunctionComponent<IProps> = ({ onApply }) => {
  const [from, setFrom] = useState(
    format(subMonths(new Date(), 3), "dd/MM/yyyy")
  );
  const [to, setTo] = useState(format(new Date(), "dd/MM/yyyy"));
  return (
    <Box>
      <Box py={1}>
        <Box px={2} mb={2}>
          <DatePicker
            onChange={(date) => {
              setFrom(format(date, "dd/MM/yyyy"));
            }}
            defaultValue={subMonths(new Date(), 3)}
            sx={{
              button: {
                mr: 0,
              },
              input: {
                width: "130px",
              },
            }}
            label="From"
          />
        </Box>
        <Box px={2}>
          <DatePicker
            onChange={(date) => {
              setTo(format(date, "dd/MM/yyyy"));
            }}
            maxDate={new Date()}
            defaultValue={new Date()}
            sx={{
              button: {
                mr: 0,
              },
              input: {
                width: "130px",
              },
            }}
            label="To"
          />
        </Box>
      </Box>
      <Box px={2} my={1} display="flex" justifyContent="center">
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "18px",
            backgroundColor: "#0070ba",
            ":hover": {
              backgroundColor: "#003087",
            },
            paddingLeft: "24px !important",
            paddingRight: "24px !important",
            py: 1,
          }}
          onClick={() => onApply(`${from} - ${to}`)}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default RangePicker;
