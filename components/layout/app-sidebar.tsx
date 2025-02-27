import { NavUser } from "@/components/navUser";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";

import { data } from "@/data";
import { NavGroup } from "./nav-group";

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = await auth();
  
  // Extract only plain data
  const user = session?.user ? {
    name: session.user.name || "",
    email: session.user.email || "",
    image: session.user.image || "",
  } : null;

  console.log("data ", data);

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          {(data && data.navGroups && data.navGroups.length > 0) ? (
            data.navGroups.map((props) => (
              <NavGroup key={props.title} {...props} />
            ))
          ) : (
            <div className="p-4 text-muted-foreground">Navigation not available</div>
          )}
        </SidebarContent>
        <SidebarFooter>
          {user && <NavUser user={user} />}
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}