interface IMenuItem {
  title: string;
  href?: string;
  items?: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
}

const menu: IMenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Activity",
    items: [
      {
        title: "Transactions",
        items: [
          {
            title: "All Transactions",
            href: "#",
          },
        ],
      },
      {
        title: "Resolution Center",
        items: [
          {
            title: "Open Cases",
            href: "#",
          },
          {
            title: "Closed Cases",
            href: "#",
          },
        ],
      },
      {
        title: "Reports",
        items: [
          {
            title: "All Reports",
            href: "#",
          },
        ],
      },
      {
        title: "Operations",
        items: [
          {
            title: "Customer list",
            href: "#",
          },
          {
            title: "API Access",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Pay & Get Paid",
    items: [
      {
        title: "Wallet",
        items: [
          {
            title: "Payments",
            href: "#",
          },
          {
            title: "Banks & Cards",
            href: "#",
          },
        ],
      },
      {
        title: "Invoicing",
        items: [
          {
            title: "Create & Manage Invoices",
            href: "#",
          },
          {
            title: "Create & Manage Estimates",
            href: "#",
          },
        ],
      },
      {
        title: "Make Payments",
        items: [
          {
            title: "Send Payments",
            href: "#",
          },
          {
            title: "Payouts",
            href: "#",
          },
        ],
      },
      {
        title: "Accept Payments",
        items: [
          {
            title: "Request Money",
            href: "#",
          },
          {
            title: "PayPal Checkout",
            href: "#",
          },
          {
            title: "Subscriptions",
            href: "#",
          },
          {
            title: "Subscriptions",
            href: "PayPal.Me",
          },
        ],
      },
    ],
  },
  {
    title: "Marketing For Growth",
    items: [
      {
        title: "Resources",
        items: [
          {
            title: "Cross Border Trade",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Business Tools",
    href: "#",
  },
  {
    title: "Message Center",
    href: "#",
  },
  {
    title: "Developer",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Account Settings",
    href: "#",
  },
  {
    title: "Profile Settings",
    href: "#",
  },
];

export { menu };
