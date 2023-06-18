import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import InvoicingIcon from "components/icons/InvoicingIcon";
import PayPalMeIcon from "components/icons/PayPalMeIcon";
import PayPalCheckoutIcon from "components/icons/PaypalCheckoutIcon";
import RequestMoneyIcon from "components/icons/RequestMoneyIcon";
import SendMoneyIcon from "components/icons/SendMoneyIcon";
import type { FunctionComponent } from "react";
import type GridLayout from "react-grid-layout";
import type { ThemeType } from "theme";

export const itemsOrder = {
  0: 2,
  1.4: 3,
  2.8: 4,
  4.199999999999999: 5,
  5.6: 6,
};

export interface ILink {
  title: string;
  href: string;
  Icon: FunctionComponent;
  hidden: boolean;
}

const links: ILink[] = [
  {
    href: "#",
    title: "PayPal Checkout",
    Icon: PayPalCheckoutIcon,
    hidden: false,
  },
  {
    href: "#",
    title: "Invoicing",
    hidden: false,
    Icon: InvoicingIcon,
  },
  {
    href: "#",
    title: "Send money",
    hidden: false,
    Icon: SendMoneyIcon,
  },
  {
    href: "#",
    title: "Request money",
    hidden: false,
    Icon: RequestMoneyIcon,
  },
  {
    href: "#",
    title: "PayPal.Me",
    hidden: false,
    Icon: PayPalMeIcon,
  },
];

const layout: GridLayout.Layout[] = [
  { i: "1", x: 0, y: 0, w: 12, h: 1.4 },
  { i: "2", x: 0, y: 1.4, w: 12, h: 1.4 },
  { i: "3", x: 0, y: 2.8, w: 12, h: 1.4 },
  { i: "4", x: 0, y: 4.199999999999999, w: 12, h: 1.4 },
  { i: "5", x: 0, y: 5.6, w: 12, h: 1.4 },
];

export interface AppState {
  theme: ThemeType;
  layout: GridLayout.Layout[];
  links: ILink[];
  preventScroll: boolean;
}

const initialState: AppState = {
  theme: "light",
  layout,
  links,
  preventScroll: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    setLinks: (state, action: PayloadAction<ILink[]>) => {
      state.links = action.payload;
    },
    setLayout: (state, action: PayloadAction<GridLayout.Layout[]>) => {
      state.layout = action.payload;
    },
    setPreventScroll: (state, action: PayloadAction<boolean>) => {
      state.preventScroll = action.payload;
    },
  },
});

export const { setTheme, setLinks, setLayout, setPreventScroll } =
  appSlice.actions;
