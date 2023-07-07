import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  Hidden,
  IconButton,
  Link as MuiLink,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import MobileNavbarDrawer from "components/common/MobileNavbarDrawer";
import UserIcon from "components/icons/UserIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Logo from "../Logo";
import UserPopper from "./UserPopper";
import { menu } from "./menu";

export const Header = () => {
  const [isMobileNavbarDrawerOpen, setIsMobileNavbarDrawerOpen] =
    useState<boolean>(false);
  const [isMenuItemDrawerOpen, setIsMenuItemDrawerOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const [isPoperOpen, setIsPoperOpen] = useState(false);
  const menuLinksRef = useRef<HTMLDivElement>();
  const [poperTab, setPoperTab] = useState<
    "activity" | "pay" | "marketing" | "none"
  >("none");
  const router = useRouter();

  return (
    <Box>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          px: 2,
          zIndex: "appBar",
          backgroundImage:
            "linear-gradient(143.27deg, rgb(0, 94, 166) 0%, rgb(21, 70, 160) 100%)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Hidden mdUp>
            {isMenuItemDrawerOpen ? (
              <ArrowBackIosIcon
                onClick={() => {
                  setIsMenuItemDrawerOpen(false);
                  setCurrentMenuItem("");
                }}
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 25,
                }}
              />
            ) : (
              <Logo color="light" />
            )}
          </Hidden>
          <Typography color="#fff">{currentMenuItem || "John Doe"}</Typography>
          <Hidden mdDown>
            <Box display="flex" alignItems="center" gap={2}>
              <Box display="flex" gap={1.5}>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Developer
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Help
                </MuiLink>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ffffff6b",
                  width: "1px",
                  height: 18,
                }}
              ></Box>
              <UserPopper
                el={
                  <Box display="flex" gap={1} alignItems="center">
                    <Box
                      sx={{
                        backgroundColor: "#018065",
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                      }}
                    >
                      <UserIcon />
                    </Box>
                    <Typography color="#fff">John Doe</Typography>
                  </Box>
                }
              />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              onClick={() => {
                setIsMobileNavbarDrawerOpen((prev) => !prev);
                setIsMenuItemDrawerOpen(false);
                setCurrentMenuItem("");
              }}
            >
              {!isMobileNavbarDrawerOpen ? (
                <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
              ) : (
                <CloseIcon sx={{ color: "#fff" }} fontSize="large" />
              )}
            </IconButton>
          </Hidden>
        </Container>
      </Box>
      <Hidden mdDown>
        <Paper
          elevation={3}
          sx={{
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Container maxWidth="xl">
            <Box
              display="flex"
              alignItems="center"
              gap={3}
              onMouseLeave={() => {
                setIsPoperOpen(false);
                setPoperTab("none");
              }}
            >
              <Logo />
              <Box display="flex" gap={3} ref={menuLinksRef}>
                <MuiLink
                  onMouseEnter={() => setPoperTab("none")}
                  component={Link}
                  href="/dashboard"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    borderBottom: `3px solid ${
                      router.pathname === "/dashboard" && poperTab === "none"
                        ? "#0070ba"
                        : "transparent"
                    }`,
                    py: "5px",
                  }}
                >
                  Home
                </MuiLink>
                <Box display="flex" alignItems="center" gap={3}>
                  <Typography
                    onMouseEnter={() => {
                      if (isPoperOpen) setPoperTab("activity");
                    }}
                    color="#0070ba"
                    fontWeight={500}
                    sx={{
                      cursor: "pointer",
                      py: "5px",
                      borderBottom: `3px solid ${
                        poperTab === "activity" ? "#0070ba" : "transparent"
                      }`,
                    }}
                    onClick={() => {
                      setIsPoperOpen(true);
                      setPoperTab("activity");
                    }}
                  >
                    Activity
                  </Typography>
                  <Typography
                    onClick={() => {
                      setIsPoperOpen(true);
                      setPoperTab("pay");
                    }}
                    onMouseEnter={() => {
                      if (isPoperOpen) setPoperTab("pay");
                    }}
                    color="#0070ba"
                    fontWeight={500}
                    sx={{
                      cursor: "pointer",
                      py: "5px",
                      borderBottom: `3px solid ${
                        poperTab === "pay" ? "#0070ba" : "transparent"
                      }`,
                    }}
                  >
                    Pay & Get Paid
                  </Typography>
                  <Typography
                    onClick={() => {
                      setIsPoperOpen(true);
                      setPoperTab("marketing");
                    }}
                    onMouseEnter={() => {
                      if (isPoperOpen) setPoperTab("marketing");
                    }}
                    color="#0070ba"
                    fontWeight={500}
                    sx={{
                      cursor: "pointer",
                      py: "5px",
                      borderBottom: `3px solid ${
                        poperTab === "marketing" ? "#0070ba" : "transparent"
                      }`,
                    }}
                  >
                    Marketing For Growth
                  </Typography>
                </Box>
                <MuiLink
                  onMouseEnter={() => setPoperTab("none")}
                  component={Link}
                  href="#"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    py: "5px",
                    borderBottom: `3px solid transparent`,
                  }}
                >
                  Business Tools
                </MuiLink>
              </Box>
              <Popper
                open={isPoperOpen && poperTab !== "none"}
                anchorEl={menuLinksRef.current}
                sx={{
                  width: "100%",
                }}
              >
                <Paper elevation={3}>
                  <Box sx={{ p: 1, bgcolor: "background.paper", px: 35 }}>
                    <Box display="flex" gap={10} py={3}>
                      {poperTab !== "none" &&
                        menu[poperTab].map((item, i) => {
                          return (
                            <Box key={i}>
                              <Typography mb={2} fontSize={16} fontWeight={600}>
                                {item.title}
                              </Typography>
                              <Box
                                display="flex"
                                flexDirection="column"
                                gap={1}
                              >
                                {item.items.map(({ link, title }, idx) => (
                                  <MuiLink
                                    key={idx}
                                    component={Link}
                                    href={link}
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      ":hover": { color: "#0070ba" },
                                    }}
                                    underline="hover"
                                    color="rgb(74, 74, 74)"
                                  >
                                    {title}
                                  </MuiLink>
                                ))}
                              </Box>
                            </Box>
                          );
                        })}
                    </Box>
                  </Box>
                </Paper>
              </Popper>
            </Box>
          </Container>
        </Paper>
      </Hidden>
      <MobileNavbarDrawer
        isDrawer={isMobileNavbarDrawerOpen}
        setIsDrawer={setIsMobileNavbarDrawerOpen}
        isMenuItemDrawerOpen={isMenuItemDrawerOpen}
        setIsMenuItemDrawerOpen={setIsMenuItemDrawerOpen}
        setCurrentMenuItem={setCurrentMenuItem}
      />
    </Box>
  );
};
