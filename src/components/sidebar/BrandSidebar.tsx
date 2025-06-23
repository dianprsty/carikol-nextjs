"use client"

import * as React from "react"
import {
  IconSettings,
  IconHelp,
  IconSearch,
} from "@tabler/icons-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavSecondary } from "@/components/sidebar/nav-secondary"
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { GaugeIcon, BuildingIcon, CompassIcon, ShoppingBagIcon } from "lucide-react"

const data = {
  user: {
    name: "John Doe",
    email: "johnd@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/brand",
      icon: GaugeIcon,
    },
    {
      title: "Kampanye",
      url: "/brand/kampanye",
      icon: BuildingIcon,
    },
    {
      title: "Explore KOL",
      url: "/brand/explore",
      icon: CompassIcon,
    },
    {
      title: "Tawaran",
      url: "/brand/tawaran",
      icon: ShoppingBagIcon,
    },
  ],
  
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
 
}

export function BrandSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-background "
            >
              <a href="/">
                <Image src="/images/logo.png" alt="CariKOL" width={48} height={48} className="w-6 h-6" />
                <span className="text-base font-semibold text-primary">CariKOL</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}