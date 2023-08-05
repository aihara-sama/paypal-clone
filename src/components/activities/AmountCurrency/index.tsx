import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const AmountCurrency = () => {
  const [open, setOpen] = useState(false);
  const [curr, setCurr] = useState("GBR");
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("0");

  useEffect(() => {
    const handleClose = (e: any) => {
      if (e.target.classList.contains("MuiBackdrop-root")) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClose);

    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  }, [open]);

  return (
    <FormControl
      sx={{ minWidth: 150 }}
      onClick={() => {
        if (!open) setOpen(true);
      }}
    >
      <InputLabel id="Date-label">Amount & Currency</InputLabel>
      <Select
        open={open}
        sx={{
          width: "182px",
        }}
        value={`${curr}${
          curr !== "All Currencies" && (min !== "0" || max !== "0")
            ? ` ${min} - ${max}`
            : ""
        }`}
        id="Amount & Currency"
        label="Amount & Currency"
        labelId="Amount & Currency-label"
        MenuProps={{
          anchorOrigin: {
            horizontal: "left",
            vertical: "bottom",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          PaperProps: {
            sx: {
              mt: 1,
              px: 2,
              pt: 1,
            },
          },
        }}
        size="small"
        defaultValue={curr}
      >
        <FormControl sx={{ minWidth: 150, mt: 1, width: "100%", mb: 2 }}>
          <Box>
            <InputLabel id="Currency-label">Currency</InputLabel>
            <Select
              fullWidth
              id="Currency"
              label="Currency"
              labelId="Currency-label"
              MenuProps={{
                anchorOrigin: {
                  horizontal: "left",
                  vertical: "bottom",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  sx: {
                    mt: 1,
                  },
                },
              }}
              size="small"
              defaultValue={curr}
              onChange={(e) => setCurr(e.target.value)}
            >
              <MenuItem value="All Currencies">All Currencies</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBR">GBR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </Box>
        </FormControl>
        <Divider />
        <Box mb={2}>
          <TextField
            error={min === ""}
            onChange={(e) => {
              const amount = e.target.value;
              if (/^[0-9]+$/.test(amount) || amount === "") setMin(amount);
            }}
            disabled={curr === "All Currencies"}
            sx={{ maxWidth: 200 }}
            fullWidth
            value={min}
            label="Minimum"
          />
        </Box>
        <Box>
          <TextField
            error={max === ""}
            onChange={(e) => {
              const amount = e.target.value;
              if (/^[0-9]+$/.test(amount) || amount === "") setMax(amount);
            }}
            disabled={curr === "All Currencies"}
            sx={{ maxWidth: 200 }}
            fullWidth
            value={max}
            label="Maximum"
          />
        </Box>
        <Box my={2} display="flex" justifyContent="center">
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
            onClick={() => setOpen(false)}
          >
            Apply
          </Button>
        </Box>
        <MenuItem
          sx={{ display: "none" }}
          value={`${curr}${
            curr !== "All Currencies" && (min !== "0" || max !== "0")
              ? ` ${min} - ${max}`
              : ""
          }`}
        >
          {`${curr}${
            curr !== "All Currencies" && (min !== "0" || max !== "0")
              ? ` ${min} - ${max}`
              : ""
          }`}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default AmountCurrency;
