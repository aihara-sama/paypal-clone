import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Drawer,
  Hidden,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import React, { useState } from "react";
import MenuItemDrawer from "./MenuItemDrawer";
import { menu } from "./menu";

interface IProps {
  isDrawer: boolean;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuItemDrawerOpen: boolean;
  setIsMenuItemDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMenuItem: React.Dispatch<React.SetStateAction<string>>;
}

const MobileNavbarDrawer: FunctionComponent<IProps> = ({
  isDrawer,
  setIsDrawer,
  isMenuItemDrawerOpen,
  setIsMenuItemDrawerOpen,
  setCurrentMenuItem,
}) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [itemItems, setItemItems] = useState<
    {
      title: string;
      items: {
        title: string;
        href: string;
      }[];
    }[]
  >([]);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return (
    <Hidden mdUp>
      <Drawer
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
        <Box display="flex" flexDirection="column">
          {menu.map((item, idx) =>
            item.href ? (
              <MuiLink
                key={idx}
                component={Link}
                href={item.href}
                underline="none"
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
                {item.title}
              </MuiLink>
            ) : (
              <Box key={idx}>
                <Box
                  onClick={() => {
                    setIsMenuItemDrawerOpen(true);
                    setCurrentMenuItem(item.title);
                    setItemItems(item.items);
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    borderBottom: "1px solid rgb(234, 236, 237)",
                    cursor: "pointer",
                    color: "#2c2e2f",
                    ":hover": {
                      color: "#005ea6",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <ArrowForwardIosIcon fontSize="small" />
                </Box>
              </Box>
            )
          )}
        </Box>
        <Box display="flex" mt={5} justifyContent="center">
          <MuiLink
            href="#"
            underline="hover"
            sx={{
              fontSize: 15,
              fontWeight: 500,
              borderRadius: "24px",
              color: "#005ea6",
              border: "1px solid #005ea6",
              cursor: "pointer",
              padding: "12px 18px !important",
              width: "241px",
              textAlign: "center",
            }}
          >
            Log out
          </MuiLink>
        </Box>
      </Drawer>
      <MenuItemDrawer
        isDrawer={isMenuItemDrawerOpen}
        setIsDrawer={setIsMenuItemDrawerOpen}
        items={itemItems}
      />
    </Hidden>
  );
};

export default MobileNavbarDrawer;
