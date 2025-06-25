import KolDashboardLayout from "@/components/layout/KolDashboardLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const metadata = {
  title: "Dashboard KOL",
  description:
    "CariKOL bantu influencer membuat rate card profesional hanya dalam hitungan menit. Tinggal Klik Tanpa repot, tanpa ribet.",
};

function Layout({ children }: Props) {
  return (
    <KolDashboardLayout title={metadata?.title}>{children}</KolDashboardLayout>
  );
}

export default Layout;
