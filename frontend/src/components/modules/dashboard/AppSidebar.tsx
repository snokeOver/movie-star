"use client";

import * as React from "react";
import {
  ChartArea,
  GalleryVerticalEnd,
  MessageCircleDashedIcon,
  PieChart,
  User,
  Video,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./TeamSwitcher";
import { NavMain } from "./NavMain";
import { NavProjects } from "./NavProjects";
import { NavUser } from "./NavUser";
import { useUserStore } from "@/stores/auth";

// This is sample data.
const adminData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Movie Star",
      logo: GalleryVerticalEnd,
      plan: "Snoke Industry",
    },
  ],
  navMain: [
    {
      title: "Media Library",
      url: "/dashboard/admin/media/manage",
      icon: Video,
      isActive: true,
      items: [
        {
          title: "Create",
          url: "/dashboard/admin/media/create",
        },
        {
          title: "Manage",
          url: "/dashboard/admin/media/manage",
        },
      ],
    },
    {
      title: "Reviews",
      url: "/dashboard/admin/reviews/manage",
      icon: MessageCircleDashedIcon,
      isActive: true,
      items: [
        {
          title: "Manage",
          url: "/dashboard/admin/reviews/manage",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Analytics",
      url: "/dashboard/admin",
      icon: ChartArea,
    },
    {
      name: "Sales",
      url: "/dashboard/admin/sales",
      icon: PieChart,
    },
  ],
};

//user data
const userData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Movie Star",
      logo: GalleryVerticalEnd,
      plan: "Snoke Industry",
    },
  ],
  navMain: [
    {
      title: "Media",
      url: "/dashboard/user/purchase",
      icon: Video,
      isActive: true,
      items: [
        {
          title: "Purchase",
          url: "/dashboard/user/purchase",
        },
        {
          title: "Reviews",
          url: "/dashboard/user/reviews",
        },
        {
          title: "Watchlist",
          url: "/dashboard/user/watchlist",
        },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/user",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Edit Profile",
          url: "/dashboard/user",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUserStore();
  if (!user) return null;

  const data = user.role === "admin" ? adminData : userData;

  data.user.email = user.email;
  data.user.avatar = user.profilePhoto;
  data.user.name = user.name;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {data?.projects && <NavProjects projects={data.projects} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
