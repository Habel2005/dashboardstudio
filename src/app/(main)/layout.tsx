import type { PropsWithChildren } from "react";
import {
  Sidebar,
  SidebarInset,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/logo";
import { Bell, Settings } from "lucide-react";
import Link from "next/link";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar">
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
        <SidebarFooter>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="size-4" />
            <span className="group-data-[collapsible=icon]:hidden">Settings</span>
          </Button>
          <div className="flex items-center gap-2 border-t p-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-t-0 group-data-[collapsible=icon]:p-0">
            <Avatar className="size-8">
              <AvatarImage
                src="https://picsum.photos/seed/avatar/40/40"
                alt="User Avatar"
                data-ai-hint="user avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-muted-foreground">
                admin@example.com
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Can add breadcrumbs or page title here */}
          </div>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link href="#">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Toggle notifications</span>
            </Link>
          </Button>
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage
                src="https://picsum.photos/seed/avatar/40/40"
                alt="User Avatar"
                data-ai-hint="user avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </>
  );
}
