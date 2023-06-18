import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  Hidden,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FunctionComponent } from "react";

interface IFeedbackProps {}

const Feedback: FunctionComponent<IFeedbackProps> = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "fixed",
          top: "25%",
          right: "0px",
          transform: "translateY(30%)",
          zIndex: "997",
        }}
      >
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={isFeedbackOpen}
            onClose={() => setIsFeedbackOpen(false)}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                width: { xs: "100%" },
                backgroundColor: "background.profile",
                backgroundImage: "none",
                py: 0.5,
              },
            }}
          >
            <Box
              px={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(235, 235, 235)",
              }}
            >
              <Typography color="rgb(122, 123, 123)" fontSize={22}>
                Feedback
              </Typography>
              <IconButton
                onClick={() => {
                  setIsFeedbackOpen(false);
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box py={3} px={3}>
              <Typography
                color="rgb(46, 44, 47)"
                fontSize={14}
                fontWeight={300}
              >
                Tell us what you think
              </Typography>
              <Typography mt={2} fontWeight={500}>
                The PayPal homepage helps me accomplish my tasks for my
                business.
              </Typography>

              <Box>
                <Box mb={1} display="flex" justifyContent="space-between">
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly disagree
                  </Typography>
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly agree
                  </Typography>
                </Box>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <RadioGroup
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                      }}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="1"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="2"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" />}
                        label="3"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" />}
                        label="4"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" />}
                        label="5"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography fontWeight={500}>
                  How easy or difficult was it to find what you were looking
                  for?
                </Typography>
                <Box mb={1} display="flex" justifyContent="space-between">
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly disagree
                  </Typography>
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly agree
                  </Typography>
                </Box>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <RadioGroup
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                      }}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="1"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="2"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" />}
                        label="3"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" />}
                        label="4"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" />}
                        label="5"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography fontWeight={500} mb={1}>
                  Thanks for helping us make PayPal better for you!
                </Typography>
                <Box mt={2}>
                  <TextField
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    inputProps={{
                      maxLength: 200,
                    }}
                    size="small"
                    minRows={3}
                    multiline
                    label={
                      <Typography fontSize={14}>
                        Would you like to add a comment? (Optional)
                      </Typography>
                    }
                    variant="outlined"
                  />
                  <Typography mt={1} fontSize={13} color="rgb(104, 113, 115)">
                    {comment.length}/200
                  </Typography>
                </Box>
              </Box>
              <Box mt={2}>
                <Button
                  sx={{
                    borderRadius: "24px",
                    bgcolor: "rgb(0, 112, 186)",
                    ":hover": {
                      bgcolor: "rgb(0, 48, 135)",
                    },
                    px: "24px",
                    py: "12px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Box
            right={{ xs: isFeedbackOpen ? 36 : "-389px" }}
            sx={{
              transition: "right 0.3s",
              overflow: "auto",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 2px 0px",
            }}
            bgcolor="#fff"
            position="absolute"
            width={391}
            maxHeight={566}
          >
            <Box py={3} px={3}>
              <Typography
                color="rgb(46, 44, 47)"
                fontSize={14}
                fontWeight={300}
              >
                Tell us what you think
              </Typography>
              <Typography mt={2} fontWeight={500} mb={1}>
                The PayPal homepage helps me accomplish my tasks for my
                business.
              </Typography>

              <Box>
                <Box mb={1} display="flex" justifyContent="space-between">
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly disagree
                  </Typography>
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly agree
                  </Typography>
                </Box>
                <Box>
                  <FormControl>
                    <RadioGroup
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                      }}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="1"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="2"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" />}
                        label="3"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" />}
                        label="4"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" />}
                        label="5"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography fontWeight={500} mb={1}>
                  How easy or difficult was it to find what you were looking
                  for?
                </Typography>
                <Box mb={1} display="flex" justifyContent="space-between">
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly disagree
                  </Typography>
                  <Typography fontSize={13} color="rgb(44, 46, 47)">
                    Strongly agree
                  </Typography>
                </Box>
                <Box>
                  <FormControl>
                    <RadioGroup
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                      }}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" />}
                        label="1"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" />}
                        label="2"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" />}
                        label="3"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" />}
                        label="4"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" />}
                        label="5"
                        labelPlacement="bottom"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography fontWeight={500}>
                  Thanks for helping us make PayPal better for you!
                </Typography>
                <Box mt={2}>
                  <TextField
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    inputProps={{
                      maxLength: 200,
                    }}
                    size="small"
                    minRows={3}
                    multiline
                    label={
                      <Typography fontSize={14}>
                        Would you like to add a comment? (Optional)
                      </Typography>
                    }
                    variant="outlined"
                  />
                  <Typography mt={1} fontSize={13} color="rgb(104, 113, 115)">
                    {comment.length}/200
                  </Typography>
                </Box>
              </Box>
              <Box mt={2}>
                <Button
                  sx={{
                    borderRadius: "24px",
                    bgcolor: "rgb(0, 112, 186)",
                    ":hover": {
                      bgcolor: "rgb(0, 48, 135)",
                    },
                    px: "24px",
                    py: "12px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Hidden>
        <Box
          sx={{
            zIndex: "9999",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "auto",
            right: "36px",
            height: "36px",
            transform: "rotate(-90deg)",
            transformOrigin: "100% 0px",
            cursor: "pointer",
            color: "rgb(255, 255, 255)",
            lineHeight: "36px",
            transitionDuration: "0.4s",
            bgcolor: "rgb(0, 112, 186)",
            ":hover": {
              bgcolor: "rgb(0, 48, 135)",
            },
          }}
          onClick={() => {
            setIsFeedbackOpen((prev) => !prev);
          }}
        >
          <Typography
            sx={{
              position: "relative",
              padding: "0px 10px 0px 36px",
              whiteSpace: "nowrap",
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "36px",
            }}
          >
            Feedback
          </Typography>
          <Box
            component="img"
            src={
              isFeedbackOpen
                ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgd2lkdGg9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuMzU0IDguMTQ2TDEyIDEzLjc5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMSAxIC43MDgtLjcwOHoiLz48L3N2Zz4="
                : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuMzU0IDE0Ljg1NGEuNS41IDAgMCAxLS43MDgtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEtLjcwOC43MDhMMTIgOS4yMDdsLTUuNjQ2IDUuNjQ3eiIvPjwvc3ZnPg=="
            }
            alt="chevron icon"
            sx={{
              position: "absolute",
              top: "3px",
              left: "0px",
              margin: "0px 3px",
              width: "33px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
