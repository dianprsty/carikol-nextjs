import { BrandSidebar } from "@/components/sidebar/BrandSidebar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function BrandDashboardLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <BrandSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={title} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}