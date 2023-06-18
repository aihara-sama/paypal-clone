import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Divider,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import BusinessToolsIcon from "components/icons/BusinessToolsIcon";
import PencilIcon from "components/icons/PencilIcon";
import Link from "next/link";
import { useState, type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { itemsOrder } from "slices/app.slice";
import type { ApplicationState } from "store";
import EditLinksModal from "./EditLinksModal";

interface IQuickLinksProps {}
export interface ILink {
  title: string;
  href: string;
  Icon: JSX.Element;
  hidden: boolean;
}

const QuickLinks: FunctionComponent<IQuickLinksProps> = () => {
  const [showMore, setShowMore] = useState(false);
  const { layout, links } = useSelector((state: ApplicationState) => state.app);

  return (
    <Paper sx={{ p: 2 }}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={500}>
          Quick links
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <EditLinksModal el={<PencilIcon onClick={() => {}} />} />
          <KeyboardArrowDownIcon
            sx={{
              cursor: "pointer",
              transform: `rotate(${showMore ? "180deg" : 0})`,
              color: "#2c2e2f",
              fontSize: 30,
            }}
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
          />
        </Box>
      </Box>
      {showMore && (
        <Typography mb={1} fontSize={13} fontWeight={500}>
          Your apps
        </Typography>
      )}
      <Box display="flex" alignItems="center" gap={5}>
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
              <Typography whiteSpace="nowrap" fontSize={12} fontWeight={700}>
                {link.title}
              </Typography>
            </MuiLink>
          )
        )}
      </Box>
      {showMore && (
        <Box mt={3}>
          <Divider />
          <Box mt={1}>
            <Typography mb={2} fontSize={15}>
              Explore
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <MuiLink
                component={Link}
                href="/"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                underline="hover"
                color="#1479be"
              >
                <Typography fontSize={13} fontWeight={600}>
                  Accept Payments
                </Typography>
                <KeyboardArrowRightIcon fontSize="small" />
              </MuiLink>
              <MuiLink
                component={Link}
                href="/"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                underline="hover"
                color="#1479be"
              >
                <Typography fontSize={13} fontWeight={600}>
                  Make Payments
                </Typography>
                <KeyboardArrowRightIcon fontSize="small" />
              </MuiLink>
              <MuiLink
                component={Link}
                href="/"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                underline="hover"
                color="#1479be"
              >
                <Typography fontSize={13} fontWeight={600}>
                  Streamline Operations
                </Typography>
                <KeyboardArrowRightIcon fontSize="small" />
              </MuiLink>
            </Box>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default QuickLinks;
