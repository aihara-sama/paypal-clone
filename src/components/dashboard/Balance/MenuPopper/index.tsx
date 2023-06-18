import { Box, Fade, Link as MuiLink, Paper, Popper } from "@mui/material";
import Link from "next/link";
import { useRef, useState, type FunctionComponent } from "react";

interface IUserPopperProps {
  el: JSX.Element;
}

const MenuPopper: FunctionComponent<IUserPopperProps> = ({ el }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>();
  const handleMouseClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box onClick={handleMouseClick}>
      <Box sx={{ cursor: "default" }} ref={anchorRef}>
        {el}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        transition
        sx={{
          zIndex: 999999,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ py: 1 }}>
              <Box display="flex" flexDirection="column">
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      backgroundColor: "rgb(228, 241, 251)",
                    },
                  }}
                  underline="none"
                  fontSize={14}
                  py={1}
                  px={2}
                  color="rgb(44, 46, 47)"
                >
                  Go to money page
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{
                    ":hover": {
                      backgroundColor: "rgb(228, 241, 251)",
                    },
                  }}
                  underline="none"
                  color="rgb(44, 46, 47)"
                  fontSize={14}
                  py={1}
                  px={2}
                >
                  Send or request money
                </MuiLink>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default MenuPopper;
