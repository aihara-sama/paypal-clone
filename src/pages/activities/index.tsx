import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Layout } from "components/common/Layout";
import { subMonths } from "date-fns";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const transactionsFields = [
  { text: "All", value: "all" },
  { text: "Email Address", value: "email_address" },
  { text: "Transaction ID", value: "transaction_id" },
  { text: "Case ID", value: "case_id" },
  { text: "Last Name", value: "last_name" },
  { text: "First Name", value: "first_name" },
  { text: "Business Name", value: "business_name" },
  { text: "Card Number", value: "card_number" },
  { text: "Receipt ID", value: "receipt_id" },
  { text: "Invoice ID", value: "invoice_id" },
  { text: "Auction Item Number", value: "auction_item_number" },
  { text: "Order ID", value: "order_id" },
  { text: "Billing Assignment", value: "billing_assignment" },
  { text: "Profile ID", value: "profile_id" },
  { text: "Store ID", value: "store_id" },
  { text: "Payout ID", value: "payout_id" },
];

const ActivitiesPage = () => {
  const [transactionField, setTransactionField] = useState(
    transactionsFields[0]
  );

  return (
    <Layout>
      <Box
        position="fixed"
        left={0}
        right={0}
        height="165px"
        top="121px"
        py={2}
        px="322px"
        bgcolor="#fff"
      >
        <FormGroup
          row
          sx={{
            border: "1px solid #40a9ff",
          }}
        >
          <FormControl sx={{ minWidth: 150 }}>
            <Select
              MenuProps={{
                anchorOrigin: {
                  horizontal: "left",
                  vertical: "bottom",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  sx: {
                    maxHeight: 350,
                    mt: 1,
                  },
                },
              }}
              sx={{
                borderRadius: 0,
              }}
              // size="small"
              value={transactionField.value}
              onChange={(e) =>
                setTransactionField(
                  transactionsFields.find(
                    ({ value }) => value === e.target.value
                  )
                )
              }
              displayEmpty
            >
              {transactionsFields.map(({ text, value }, idx) => (
                <MenuItem key={idx} value={value}>
                  {text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <TextField
              sx={{
                fieldset: {
                  border: "none",
                },
              }}
              variant="outlined"
              placeholder="Search for transactions"
              fullWidth
              InputProps={{
                sx: { borderRadius: 0 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </FormGroup>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="Archive-label">Archive</InputLabel>
            <Select
              id="Archive"
              label="Archive"
              labelId="Archive-label"
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 350,
                    mt: 1,
                  },
                },
              }}
              size="small"
              defaultValue="Active"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="Transaction Type-label">
              Transaction Type
            </InputLabel>
            <Select
              id="Transaction Type"
              label="Transaction Type"
              labelId="Transaction Type-label"
              MenuProps={{
                anchorOrigin: {
                  horizontal: "left",
                  vertical: "bottom",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  sx: {
                    maxHeight: 350,
                    mt: 1,
                  },
                },
              }}
              size="small"
              defaultValue="All activity"
            >
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="All activity"
              >
                All activity
              </MenuItem>
              <ListSubheader
                sx={{
                  cursor: "not-allowed",
                  color: "#000000DE",
                  ":hover": {
                    background: "#e4f1fb",
                  },
                  fontWeight: 600,
                  lineHeight: 2.3,
                }}
              >
                Transactions
              </ListSubheader>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Payments received"
              >
                Payments received
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Past 30 days"
              >
                Payments sent
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Money Transferred"
              >
                Money Transferred
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Money Added"
              >
                Money Added
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Refunds"
              >
                Refunds
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Billing agreements and profiles"
              >
                Billing agreements and profiles
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Subscription payments"
              >
                Subscription payments
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Reversals"
              >
                Reversals
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Currency conversions"
              >
                Currency conversions
              </MenuItem>
              <ListSubheader
                sx={{
                  cursor: "not-allowed",
                  color: "#000000DE",
                  ":hover": {
                    background: "#e4f1fb",
                  },
                  fontWeight: 600,
                  lineHeight: 2.3,
                }}
              >
                Funding Instruments
              </ListSubheader>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="eChecks"
              >
                eChecks
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="Balance view (All transactions)"
              >
                Balance view (All transactions)
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="Money requests"
              >
                Money requests
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="Ready to ship"
              >
                Ready to ship
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="Payouts"
              >
                Payouts
              </MenuItem>
              <ListSubheader
                sx={{
                  cursor: "not-allowed",
                  color: "#000000DE",
                  ":hover": {
                    background: "#e4f1fb",
                  },
                  fontWeight: 600,
                  lineHeight: 2.3,
                }}
              >
                Invoices
              </ListSubheader>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="All invoices"
              >
                All invoices
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Paid"
              >
                Paid
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Unpaid"
              >
                Unpaid
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                }}
                value="Orders"
              >
                Orders
              </MenuItem>
              <ListSubheader
                sx={{
                  cursor: "not-allowed",
                  color: "#000000DE",
                  ":hover": {
                    background: "#e4f1fb",
                  },
                  fontWeight: 600,
                  lineHeight: 2.3,
                }}
              >
                Holds
              </ListSubheader>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="All holds"
              >
                All holds
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Reserves placed"
              >
                Reserves placed
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Payment on hold"
              >
                Payment on hold
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Payment under review"
              >
                Payment under review
              </MenuItem>
              <ListSubheader
                sx={{
                  cursor: "not-allowed",
                  color: "#000000DE",
                  ":hover": {
                    background: "#e4f1fb",
                  },
                  fontWeight: 600,
                  lineHeight: 2.3,
                }}
              >
                Fraud protection
              </ListSubheader>
              <MenuItem
                sx={{
                  fontSize: 14,
                  "::before": {
                    content: '"\u2012"',
                    marginRight: 1,
                    fontSize: 18,
                  },
                }}
                value="Denied"
              >
                Denied
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="Date-label">Date</InputLabel>
            <Select
              id="Date"
              label="Date"
              labelId="Date-label"
              MenuProps={{
                anchorOrigin: {
                  horizontal: "left",
                  vertical: "bottom",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  sx: {
                    mt: 1,
                  },
                },
              }}
              size="small"
              defaultValue={2023}
            >
              <MenuItem value="Past 30 days">Past 30 days</MenuItem>
              <MenuItem value="Past 90 days">Past 90 days</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <Divider />
              <Box py={1}>
                <Box px={2} mb={2}>
                  <DatePicker
                    defaultValue={subMonths(new Date(), 3)}
                    sx={{
                      button: {
                        mr: 0,
                      },
                      input: {
                        width: "130px",
                      },
                    }}
                    label="From"
                  />
                </Box>
                <Box px={2}>
                  <DatePicker
                    maxDate={new Date()}
                    defaultValue={new Date()}
                    sx={{
                      button: {
                        mr: 0,
                      },
                      input: {
                        width: "130px",
                      },
                    }}
                    label="To"
                  />
                </Box>
              </Box>
              <Box px={2} my={1} display="flex" justifyContent="center">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: "18px",
                    backgroundColor: "#0070ba",
                    ":hover": {
                      backgroundColor: "#003087",
                    },
                    paddingLeft: "24px !important",
                    paddingRight: "24px !important",
                    py: 1,
                  }}
                  // onClick={() => handleClose(true)}
                >
                  Apply
                </Button>
              </Box>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box mt="165px"></Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default ActivitiesPage;
