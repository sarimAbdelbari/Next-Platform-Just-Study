import Container from "@/components/layout/container";
import ContainerDash from "@/components/layout/containerDash";
import { AppSidebar } from "@/components/layout/appSidebar";
import Header from "@/components/layout/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Platform",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <ContainerDash className="my-4 ">
          <Header />

          {children}
        </ContainerDash>
      </SidebarInset>
    </SidebarProvider>
  );
}
