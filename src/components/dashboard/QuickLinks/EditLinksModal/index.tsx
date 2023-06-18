import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import InvoicingIcon from "components/icons/InvoicingIcon";
import PayPalMeIcon from "components/icons/PayPalMeIcon";
import PayPalCheckoutIcon from "components/icons/PaypalCheckoutIcon";
import ReorderIcon from "components/icons/ReorderIcon";
import RequestMoneyIcon from "components/icons/RequestMoneyIcon";
import SendMoneyIcon from "components/icons/SendMoneyIcon";
import cloneDeep from "lodash.clonedeep";
import Link from "next/link";
import * as React from "react";
import GridLayout from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import { setLayout, setLinks } from "slices/app.slice";
import type { ApplicationState } from "store";

const style = {
  position: "absolute" as "absolute",
  width: { xs: "90%", md: "75%" },
  maxHeight: "90vh",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  py: 4,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  outline: "none",
};
interface IProps {
  el: JSX.Element;
}
const EditLinksModal: React.FunctionComponent<IProps> = ({ el }) => {
  const { layout, links } = useSelector((state: ApplicationState) => state.app);
  const dispatch = useDispatch();

  const [newLayout, setNewLayout] = React.useState(cloneDeep(layout));
  const [newLinks, setNewLinks] = React.useState(cloneDeep(links));
  const [open, setOpen] = React.useState(false);
  const [gridLayoutWrapperWidth, setGridLayoutWrapperWidth] =
    React.useState<number>();
  const gridLayoutWrapperRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const onResize = () => {
      setGridLayoutWrapperWidth(gridLayoutWrapperRef.current.clientWidth);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (save: boolean) => {
    setOpen(false);
    if (save) {
      dispatch(setLinks(cloneDeep(newLinks)));
      dispatch(setLayout(cloneDeep(newLayout)));
    } else {
      setNewLinks(cloneDeep(links));
      setNewLayout(cloneDeep(layout));
    }
  };

  const addLink = (title: string) => {
    setNewLinks((prev) =>
      prev.map((link) => {
        if (link.title === title) {
          link.hidden = false;
        }
        return link;
      })
    );
  };
  const removeLink = (title: string) => {
    setNewLinks((prev) =>
      prev.map((link) => {
        if (link.title === title) {
          link.hidden = true;
        }
        return link;
      })
    );
  };

  return (
    <div>
      <Box display="flex" onClick={handleOpen}>
        {el}
      </Box>
      <MuiModal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box sx={style}>
          <Box px={4} display="flex" alignItems="center">
            <Typography
              m="0 auto"
              id="modal-modal-title"
              fontSize={24}
              fontWeight={500}
            >
              Edit your quick links
            </Typography>
            <IconButton>
              <CloseIcon onClick={() => handleClose(false)} />
            </IconButton>
          </Box>
          <Box px={4} overflow="auto">
            <Box>
              <Typography
                fontWeight={15}
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Get to your favorite apps in a single click with quick links.
                Move your quick links into the order you prefer, or hide certain
                apps. Discover more apps in the{" "}
                <MuiLink
                  component={Link}
                  href="&"
                  underline="hover"
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0070ba",
                    cursor: "pointer",
                  }}
                >
                  Business Tools.
                </MuiLink>
              </Typography>
            </Box>
            <Typography my={2} fontSize={15} fontWeight={500}>
              Your apps
            </Typography>
            <Box ref={gridLayoutWrapperRef}>
              <GridLayout
                onLayoutChange={(l) => {
                  setNewLayout(l);
                }}
                isResizable={false}
                className="layout"
                layout={newLayout}
                cols={12}
                rowHeight={30}
                width={
                  gridLayoutWrapperWidth ||
                  gridLayoutWrapperRef.current?.clientWidth
                }
                draggableHandle=".d-handle"
                style={{
                  background: "lightgrey",
                }}
              >
                <Box
                  placeholder="1"
                  data-order="1"
                  border="1px solid lightgrey"
                  key="1"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    width: "calc(100% - 20px) !important",
                  }}
                  bgcolor="#fff"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      p={0.5}
                      bgcolor="#fff"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccd2d6"
                      borderRadius="5px"
                      gap={1}
                    >
                      <PayPalCheckoutIcon size={16} />
                    </Box>
                    <Typography>PayPal Checkout</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    {!newLinks.find(({ title }) => title === "PayPal Checkout")
                      .hidden ? (
                      <VisibilityIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          removeLink("PayPal Checkout");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addLink("PayPal Checkout")}
                      />
                    )}
                    <ReorderIcon />
                  </Box>
                </Box>
                <Box
                  data-order="2"
                  border="1px solid lightgrey"
                  key="2"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    width: "calc(100% - 20px) !important",
                  }}
                  bgcolor="#fff"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      p={0.5}
                      bgcolor="#fff"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccd2d6"
                      borderRadius="5px"
                      gap={1}
                    >
                      <InvoicingIcon size={16} />
                    </Box>
                    <Typography>Invoicing</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    {!newLinks.find(({ title }) => title === "Invoicing")
                      .hidden ? (
                      <VisibilityIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          removeLink("Invoicing");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addLink("Invoicing")}
                      />
                    )}
                    <ReorderIcon />
                  </Box>
                </Box>
                <Box
                  data-order="3"
                  border="1px solid lightgrey"
                  key="3"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    width: "calc(100% - 20px) !important",
                  }}
                  bgcolor="#fff"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      p={0.5}
                      bgcolor="#fff"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccd2d6"
                      borderRadius="5px"
                      gap={1}
                    >
                      <SendMoneyIcon size={16} />
                    </Box>
                    <Typography>Send money</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    {!newLinks.find(({ title }) => title === "Send money")
                      .hidden ? (
                      <VisibilityIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          removeLink("Send money");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addLink("Send money")}
                      />
                    )}
                    <ReorderIcon />
                  </Box>
                </Box>
                <Box
                  data-order="4"
                  border="1px solid lightgrey"
                  key="4"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    width: "calc(100% - 20px) !important",
                  }}
                  bgcolor="#fff"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      p={0.5}
                      bgcolor="#fff"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccd2d6"
                      borderRadius="5px"
                      gap={1}
                    >
                      <RequestMoneyIcon size={16} />
                    </Box>
                    <Typography>Request money</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    {!newLinks.find(({ title }) => title === "Request money")
                      .hidden ? (
                      <VisibilityIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          removeLink("Request money");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addLink("Request money")}
                      />
                    )}
                    <ReorderIcon />
                  </Box>
                </Box>
                <Box
                  data-order="5"
                  border="1px solid lightgrey"
                  key="5"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    width: "calc(100% - 20px) !important",
                  }}
                  bgcolor="#fff"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      p={0.5}
                      bgcolor="#fff"
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccd2d6"
                      borderRadius="5px"
                      gap={1}
                    >
                      <PayPalMeIcon size={16} />
                    </Box>
                    <Typography>PayPal.Me</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    {!newLinks.find(({ title }) => title === "PayPal.Me")
                      .hidden ? (
                      <VisibilityIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          removeLink("PayPal.Me");
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addLink("PayPal.Me")}
                      />
                    )}
                    <ReorderIcon />
                  </Box>
                </Box>
              </GridLayout>
            </Box>
            <Box mt={3} display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "18px",
                  backgroundColor: "#0070ba",
                  ":hover": {
                    backgroundColor: "#003087",
                  },
                  paddingLeft: "24px !important",
                  paddingRight: "24px !important",
                  width: 250,
                }}
                onClick={() => handleClose(true)}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </MuiModal>
    </div>
  );
};

export default EditLinksModal;
