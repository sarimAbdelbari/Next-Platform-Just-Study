"use client";
import { 
  AudioWaveform, 
  Command, 
  GalleryVerticalEnd, 
  LayoutDashboard, 
  CheckSquare as IconChecklist, 
  Package as IconPackages, 
  Settings as IconSettings, 
  UserCog as IconUserCog, 
  Wrench as IconTool, 
  Palette as IconPalette, 
  Bell as IconNotification, 
  MonitorCheck as IconBrowserCheck, 
  HelpCircle as IconHelp 
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Users',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'Logs',
          url: '/apps',
          icon: IconPackages,
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