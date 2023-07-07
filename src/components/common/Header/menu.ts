const menu: {
  [key: string]: {
    title: string;
    items: { title: string; link: string }[];
  }[];
} = {
  activity: [
    {
      title: "Transactions",
      items: [
        {
          title: "All Transactions",
          link: "/activities",
        },
      ],
    },
    {
      title: "Resolution Center",
      items: [
        {
          title: "Open Cases",
          link: "/disputes/?type=open",
        },
        {
          title: "Closed Cases",
          link: "/disputes/?type=closed",
        },
      ],
    },
    {
      title: "Reports",
      items: [
        {
          title: "All Reports",
          link: "/reports",
        },
        {
          title: "Insights",
          link: "https://www.paypal.com/insights",
        },
      ],
    },
    {
      title: "Operations",
      items: [
        {
          title: "Customer list",
          link: "/listing/customers",
        },
        {
          title: "API Access",
          link: "/businessmanage/credentials/apiaccess",
        },
      ],
    },
  ],
  pay: [
    {
      title: "Wallet",
      items: [
        {
          title: "Payments",
          link: "/businesswallet/money",
        },
        {
          title: "Banks & Cards",
          link: "/businesswallet/money#banks-section",
        },
      ],
    },
    {
      title: "Invoicing",
      items: [
        {
          title: "Create & Manage Invoices",
          link: "/invoice/manage",
        },
        {
          title: "Create & Manage Estimates",
          link: "/invoice/estimate/manage",
        },
      ],
    },
    {
      title: "Make Payments",
      items: [
        {
          title: "Send Payments",
          link: "/myaccount/transfer/homepage/pay",
        },
        {
          title: "Payouts",
          link: "/payoutsweb/batchFileUpload?entry=nav",
        },
      ],
    },
    {
      title: "Accept Payments",
      items: [
        {
          title: "Request Money",
          link: "/myaccount/transfer/homepage/request",
        },
        {
          title: "PayPal Checkout",
          link: "/merchantapps/appcenter/acceptpayments/checkout",
        },
        {
          title: "Subscriptions",
          link: "/billing",
        },
        {
          title: "PayPal.Me",
          link: "/paypalme/my/landing",
        },
      ],
    },
  ],
  marketing: [
    {
      title: "Resources",
      items: [
        {
          title: "Cross Border Trade",
          link: "/webapps/mpp/passport/home",
        },
      ],
    },
  ],
};

export { menu };
