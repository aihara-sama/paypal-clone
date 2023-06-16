import { Box, Fade, Link as MuiLink, Paper, Popper } from "@mui/material";
import Link from "next/link";
import { useRef, useState, type FunctionComponent } from "react";

interface IUserPopperProps {
  el: JSX.Element;
}

const UserPopper: FunctionComponent<IUserPopperProps> = ({ el }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>();
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Box sx={{ cursor: "default" }} ref={anchorRef}>
        {el}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        sx={{
          zIndex: 999999,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                marginTop: "16px",

                backgroundImage:
                  "linear-gradient(143.27deg, rgb(0, 94, 166) 0%, rgb(21, 70, 160) 100%)",
                minWidth: 120,
              }}
            >
              <Box display="flex" gap={1} flexDirection="column" px={2} py={2}>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                  fontSize={14}
                >
                  Message Center
                </MuiLink>
                <MuiLink
                  component={Link}
                  fontSize={14}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Profile Settings
                </MuiLink>
                <MuiLink
                  component={Link}
                  fontSize={14}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Account Settings
                </MuiLink>
                <MuiLink
                  component={Link}
                  fontSize={14}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Log out
                </MuiLink>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default UserPopper;
