import styled from "@emotion/styled";
import type { TooltipProps } from "@mui/material/Tooltip";
import MuiTooltip, { tooltipClasses } from "@mui/material/Tooltip";

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    transform: "none !important",
    left: "15px !important",
    ":before": {
      border: "1px solid #50c7f9",
      backgroundColor: "#f5fbfe",
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    border: "1px solid #50c7f9",
    backgroundColor: "#f5fbfe",
  },
}));

export default Tooltip;
