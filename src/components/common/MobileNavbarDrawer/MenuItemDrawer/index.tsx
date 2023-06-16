import {
  Box,
  Drawer,
  Hidden,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface IMenuItemDrawerProps {
  isDrawer: boolean;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  items: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
}

const MenuItemDrawer: FunctionComponent<IMenuItemDrawerProps> = ({
  isDrawer,
  setIsDrawer,
  items,
}) => {
  return (
    <Hidden mdUp>
      <Drawer
        anchor="right"
        variant="persistent"
        open={isDrawer}
        onClose={() => setIsDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        data-testid="drawer__container"
        PaperProps={{
          sx: {
            width: { xs: "100%" },
            backgroundColor: "background.profile",
            backgroundImage: "none",
            p: 4,
            top: 60,
          },
        }}
      >
        <Box display="flex" flexDirection="column" gap={5}>
          {items.map((item, idx) => (
            <Box key={idx}>
              <Typography
                sx={{
                  borderBottom: "1px solid rgb(234, 236, 237)",
                  color: "rgb(157, 163, 166)",
                  pb: "5px",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
              <Box display="flex" flexDirection="column">
                {item.items.map(({ href, title }, i) => (
                  <MuiLink
                    key={i}
                    component={Link}
                    href={href}
                    underline="hover"
                    sx={{
                      fontSize: 18,
                      py: 2,
                      color: "#2c2e2f",
                      ":hover": {
                        color: "#005ea6",
                      },
                      borderBottom: "1px solid rgb(234, 236, 237)",
                      cursor: "pointer",
                    }}
                  >
                    {title}
                  </MuiLink>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Drawer>
    </Hidden>
  );
};

export default MenuItemDrawer;
