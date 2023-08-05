import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import RangePicker from "./RangePicker";

const SelectDate = () => {
  const [date, setDate] = useState("2023");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [date]);

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
    <FormControl sx={{ minWidth: 150 }} onClick={() => setOpen(true)}>
      <InputLabel id="Date-label">Date</InputLabel>
      <Select
        sx={{
          width: "182px",
        }}
        open={open}
        value={date}
        id="Date"
        label="Date"
        labelId="Date-label"
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
        defaultValue={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      >
        <MenuItem value="Past 30 days">Past 30 days</MenuItem>
        <MenuItem value="Past 90 days">Past 90 days</MenuItem>
        <MenuItem value="2023">2023</MenuItem>
        <MenuItem value="2022">2022</MenuItem>
        <MenuItem sx={{ display: "none" }} value={date}>
          {date}
        </MenuItem>
        <Divider />
        <RangePicker
          onApply={(d) => {
            setDate(d);
          }}
        />
      </Select>
    </FormControl>
  );
};

export default SelectDate;
