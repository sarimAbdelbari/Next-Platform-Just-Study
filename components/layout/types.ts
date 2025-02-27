// types.ts
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface NavItem {
  title: string;
  badge?: string;
  icon?: LucideIcon;
}

export interface NavLink extends NavItem {
  url: string;
}

export interface NavCollapsible extends NavItem {
  url?: string;
  items: NavLink[];
}

export interface NavGroup {
  title: string;
  items: Array<NavLink | NavCollapsible>;
}