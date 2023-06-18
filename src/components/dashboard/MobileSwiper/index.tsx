import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import BusinessToolsIcon from "components/icons/BusinessToolsIcon";
import PencilIcon from "components/icons/PencilIcon";
import Link from "next/link";
import type { MouseEvent, TouchEvent } from "react";
import { useEffect, useRef, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsOrder, setPreventScroll } from "slices/app.slice";
import type { ApplicationState } from "store";
import EditLinksModal from "../QuickLinks/EditLinksModal";

interface IMobileSwiperProps {}

const swiperMinHeight = 55;

const MobileSwiper: FunctionComponent<IMobileSwiperProps> = () => {
  const dispatch = useDispatch();

  const [isTransition, setIsTransition] = useState(false);
  const [showCloseSwiper, setShowCloseSwiper] = useState(false);
  const { layout, links } = useSelector((state: ApplicationState) => state.app);
  const [isSwiperHandlePressed, setIsSwiperHandlePressed] = useState(false);
  const mouseInitialRef = useRef<number>(-1);
  const swiperHeightInitialRef = useRef<number>(swiperMinHeight);
  const [swiperHeight, setSwiperHeight] = useState(
    swiperHeightInitialRef.current
  );
  const swiperHeightRef = useRef<number>(swiperHeightInitialRef.current);

  const handleMouseDown = (e: MouseEvent<HTMLSpanElement>) => {
    mouseInitialRef.current = e.clientY;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    dispatch(setPreventScroll(true));
    mouseInitialRef.current = e.nativeEvent.touches[0].clientY;
  };
  const handleTouchMove = (e: any) => {
    if (mouseInitialRef.current !== -1) {
      swiperHeightRef.current =
        swiperHeightInitialRef.current +
        (mouseInitialRef.current - e.nativeEvent.touches[0].clientY);
      setSwiperHeight(
        swiperHeightInitialRef.current +
          (mouseInitialRef.current - e.nativeEvent.touches[0].clientY)
      );
    }
  };

  const handleMouseUp = () => {
    if (mouseInitialRef.current !== -1) {
      setIsTransition(true);
      if (swiperHeightRef.current > 150) {
        swiperHeightRef.current = 300;
        setSwiperHeight(300);
      } else {
        setSwiperHeight(swiperMinHeight);
        swiperHeightRef.current = swiperMinHeight;
      }
    }
    mouseInitialRef.current = -1;
    if (swiperHeightRef.current > 150) {
      swiperHeightInitialRef.current = 300;
    } else {
      swiperHeightInitialRef.current = swiperMinHeight;
    }
  };
  const handleTouchUp = () => {
    dispatch(setPreventScroll(false));
    if (mouseInitialRef.current !== -1) {
      setIsTransition(true);
      if (swiperHeight > 150) {
        setSwiperHeight(300);
      } else {
        setSwiperHeight(swiperMinHeight);
      }
    }
    mouseInitialRef.current = -1;
    if (swiperHeight > 150) {
      swiperHeightInitialRef.current = 300;
    } else {
      swiperHeightInitialRef.current = swiperMinHeight;
    }
  };

  const handleMouseMove = (e: any) => {
    if (mouseInitialRef.current !== -1) {
      swiperHeightRef.current =
        swiperHeightInitialRef.current + (mouseInitialRef.current - e.clientY);
      setSwiperHeight(
        swiperHeightInitialRef.current + (mouseInitialRef.current - e.clientY)
      );
    }
  };

  const handleTransitionEnd = () => {
    setIsTransition(false);
    setShowCloseSwiper(swiperHeight === 300);
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseup", handleMouseUp);
    // document.body.addEventListener("touchmove", handleTouchMove);
    // document.body.addEventListener("touchend", handleTouchUp);
    return () => {
      document.body.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseup", handleMouseUp);
      // document.body.removeEventListener("touchmove", handleTouchMove);
      // document.body.removeEventListener("touchend", handleTouchUp);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        height: swiperHeight,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        minHeight: swiperMinHeight,
        maxHeight: 300,
        userSelect: "none",
        transition: isTransition ? "0.2s" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        borderTop: "1px solid #cbd2d6",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <Box
        sx={{
          p: 2,
        }}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleTouchUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Box
          onMouseDown={() => {
            setIsSwiperHandlePressed(true);
          }}
          onMouseUp={() => {
            setIsSwiperHandlePressed(false);
          }}
          sx={{
            backgroundColor: "#cbd2d6",
            width: "40px",
            height: "5px",
            margin: "-17px auto 10px",
            borderRadius: "3px",
            cursor: isSwiperHandlePressed ? "grabbing" : "grab",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {showCloseSwiper && (
              <CloseIcon
                onClick={() => {
                  setIsTransition(true);
                  setSwiperHeight(swiperMinHeight);
                  swiperHeightInitialRef.current = swiperMinHeight;
                }}
              />
            )}
            <Typography fontWeight={500}>Quick Links</Typography>
          </Box>
          <Box
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            <EditLinksModal el={<PencilIcon onClick={() => {}} />} />
          </Box>
        </Box>
      </Box>
      <Box overflow="auto">
        <Box px={2}>
          <Typography mb={2} fontSize={13} fontWeight={500}>
            Your apps
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            rowGap={2}
            columnGap={5}
            flexWrap="wrap"
          >
            <MuiLink
              component={Link}
              href="/"
              sx={{
                // @ts-ignore
                order: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 1,
                ":hover": {
                  div: {
                    backgroundColor: "rgb(204, 210, 214) !important",
                  },
                },
              }}
              underline="hover"
              color="#6b7476"
            >
              <Box
                p={1}
                borderRadius="50%"
                sx={{
                  backgroundColor: "rgb(244, 247, 250)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BusinessToolsIcon size={30} />
              </Box>
              <Typography whiteSpace="nowrap" fontSize={12} fontWeight={700}>
                Business Tools
              </Typography>
            </MuiLink>
            {links.map((link, idx) =>
              link.hidden ? null : (
                <MuiLink
                  key={idx}
                  component={Link}
                  href="/"
                  sx={{
                    // @ts-ignore
                    order: itemsOrder[`${layout[idx].y}`],
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                    ":hover": {
                      div: {
                        backgroundColor: "rgb(204, 210, 214) !important",
                      },
                    },
                  }}
                  underline="hover"
                  color="#6b7476"
                >
                  <Box
                    p={1}
                    borderRadius="50%"
                    sx={{
                      backgroundColor: "rgb(244, 247, 250)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <link.Icon />
                  </Box>
                  <Typography
                    whiteSpace="nowrap"
                    fontSize={12}
                    fontWeight={700}
                  >
                    {link.title}
                  </Typography>
                </MuiLink>
              )
            )}
          </Box>
          <Typography my={2} fontSize={13} fontWeight={500}>
            More for you
          </Typography>
          <Box
            mb={2}
            py={2.5}
            px={2}
            bgcolor="#f6f7fa"
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <MuiLink
              component={Link}
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              underline="none"
              color="#000"
            >
              <Typography whiteSpace="nowrap" fontSize={13} fontWeight={600}>
                Accept Payments
              </Typography>
              <KeyboardArrowRightIcon fontSize="small" />
            </MuiLink>
            <MuiLink
              py={1}
              component={Link}
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #d6dcdf",
                borderBottom: "1px solid #d6dcdf",
              }}
              underline="none"
              color="#000"
            >
              <Typography whiteSpace="nowrap" fontSize={13} fontWeight={600}>
                Make Payments
              </Typography>
              <KeyboardArrowRightIcon fontSize="small" />
            </MuiLink>
            <MuiLink
              component={Link}
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              underline="none"
              color="#000"
            >
              <Typography whiteSpace="nowrap" fontSize={13} fontWeight={600}>
                Streamline Operations
              </Typography>
              <KeyboardArrowRightIcon fontSize="small" />
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileSwiper;
