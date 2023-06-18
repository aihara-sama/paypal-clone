import { Box, Hidden } from "@mui/material";
import { Layout } from "components/common/Layout";
import Actions from "components/dashboard/Actions";
import Balance from "components/dashboard/Balance";
import Feedback from "components/dashboard/Feedback";
import Insights from "components/dashboard/Insights";
import MobileSwiper from "components/dashboard/MobileSwiper";
import Notifications from "components/dashboard/Notifications";
import QuickLinks from "components/dashboard/QuickLinks";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DashboardPage = () => {
  return (
    <Layout>
      <Box
        py={5}
        display="flex"
        gap={{ xs: 3, md: 5 }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          flex={{ xs: 1, md: "inherit" }}
        >
          <Balance />
          <Insights />
        </Box>
        <Box display="flex" flexDirection="column" gap={3} flex={1}>
          <Hidden mdDown>
            <QuickLinks />
          </Hidden>
          <Actions />
          <Notifications />
        </Box>
      </Box>
      <Hidden mdUp>
        <MobileSwiper />
      </Hidden>
      <Feedback />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default DashboardPage;
