import BrandDashboardLayout from "@/components/layout/BrandDashboardLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const metadata = {
  title: "Dashboard Brand",
  description:
    "CariKOL bantu brand menemukan influencer yang tepat untuk kampanye marketing Anda.",
};

function Layout({ children }: Props) {
  return (
    <BrandDashboardLayout title={metadata?.title}>{children}</BrandDashboardLayout>
  );
}

export default Layout;