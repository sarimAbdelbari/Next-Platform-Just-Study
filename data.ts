"use client";
import { 
  AudioWaveform, 
  Command, 
  GalleryVerticalEnd, 
  LayoutDashboard, 
  Users,
  CheckSquare as IconChecklist, 
  Package as IconPackages, 
  Settings as IconSettings, 
  UserCog as IconUserCog, 
  Wrench as IconTool, 
  Palette as IconPalette, 
  Bell as IconNotification, 
  MonitorCheck as IconBrowserCheck, 
  HelpCircle as IconHelp, 
  FileJson2,
  FileStack
} from "lucide-react";


export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Chiali Inc",
      logo: "/assets/images/logo.png",
      plan: "Enterprise",
    },
    {
      name: "Chiali Corp.",
      logo: "/assets/images/logo.png",
      plan: "Startup",
    },
    {
      name: "Chiali Acadm.",
      logo: "/assets/images/logo.png",
      plan: "Free",
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          title: 'Users',
          url: '/dashboard/users',
          icon: Users,
        },
        {
          title: 'Files',
          url: '/dashboard/files',
          icon: FileStack,
        },
        {
          title: 'Logs',
          url: '/dashboard/logs',
          icon: FileJson2,
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
};