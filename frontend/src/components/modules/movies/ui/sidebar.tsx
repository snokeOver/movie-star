"use client";

import type * as React from "react";
import { PanelLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebarStore } from "@/stores/sidebar";

const SIDEBAR_WIDTH = "18rem";
const SIDEBAR_WIDTH_COLLAPSED = "4rem";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Sidebar({ children, className, ...props }: SidebarProps) {
  const { expanded, mobileOpen, setMobileOpen } = useSidebarStore();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen border-r bg-background transition-all duration-300 ease-in-out flex flex-col",
          expanded ? `w-[${SIDEBAR_WIDTH}]` : `w-[${SIDEBAR_WIDTH_COLLAPSED}]`,
          "hidden lg:flex",
          className
        )}
        style={{
          width: expanded ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED,
        }}
        {...props}
      >
        {children}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 w-[280px] flex flex-col">
          <div className="h-full py-6 flex flex-col overflow-hidden">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function SidebarTrigger({
  children,
  className,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar, expanded } = useSidebarStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-9 w-9", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {children || (
        <PanelLeft className={cn("h-5 w-5", expanded && "rotate-180")} />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

interface SidebarMobileTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function SidebarMobileTrigger({
  children,
  className,
  ...props
}: SidebarMobileTriggerProps) {
  const { setMobileOpen } = useSidebarStore();

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn("lg:hidden", className)}
      onClick={() => setMobileOpen(true)}
      {...props}
    >
      {children || (
        <>
          <PanelLeft className="mr-2 h-4 w-4" />
          <span>Filters</span>
        </>
      )}
    </Button>
  );
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function SidebarHeader({ children, className, ...props }: SidebarHeaderProps) {
  const { expanded } = useSidebarStore();

  return (
    <div
      className={cn(
        "flex h-14 items-center px-4 mb-4 flex-shrink-0",
        expanded ? "justify-between" : "justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function SidebarContent({
  children,
  className,
  ...props
}: SidebarContentProps) {
  return (
    <div className={cn("flex-1 overflow-y-auto px-4", className)} {...props}>
      {children}
    </div>
  );
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
}

function SidebarItem({
  children,
  icon,
  title,
  className,
  ...props
}: SidebarItemProps) {
  const { expanded } = useSidebarStore();

  if (!expanded) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "flex h-10 items-center justify-center rounded-md hover:bg-accent mb-1",
                className
              )}
              {...props}
            >
              {icon}
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" align="start">
            {title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className={cn("mb-1", className)} {...props}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      {children}
    </div>
  );
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function SidebarFooter({ children, className, ...props }: SidebarFooterProps) {
  const { expanded } = useSidebarStore();

  return (
    <div
      className={cn(
        "mt-auto px-4 py-4 flex-shrink-0",
        expanded ? "block" : "flex justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarMobileTrigger,
  SidebarTrigger,
};
