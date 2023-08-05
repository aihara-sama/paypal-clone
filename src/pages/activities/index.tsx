import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
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
import AmountCurrency from "components/activities/AmountCurrency";
import SelectDate from "components/activities/SelectDate";
import Transactions from "components/activities/Transactions";
import { Layout } from "components/common/Layout";
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
        top={{ xs: "60px", md: "121px" }}
        py={2}
        bgcolor="#fff"
        zIndex={999}
        px={3}
      >
        <Box margin={{ lg: "0 auto" }} maxWidth="1200px">
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
              alignItems: "center",
              gap: 3,
              overflowX: "auto",
              py: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel id="Archive-label">Archive</InputLabel>
                <Select
                  sx={{
                    width: "182px",
                  }}
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
                  sx={{
                    width: "182px",
                  }}
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
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <SelectDate />
              <AmountCurrency />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={{ xs: "-57px", md: "165px" }}></Box>
      <Transactions />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default ActivitiesPage;
