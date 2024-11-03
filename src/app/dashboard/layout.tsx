import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import AppSidebar from "@/components/side-bar/app-sidebar";
import * as React from "react";
import type {Metadata} from "next";
import { ModeToggle } from "@/components/theme-provider/mode-toggle";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export const metadata: Metadata = {
    title: "Your Dashboard",
    description: "Personalized Dashboard",
    icons: {
        icon:['/icons/dashboard.png']
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <DynamicBreadcrumb/>
                    </div>
                    <div className="flex items-center gap-2 px-4 ml-auto">
                        <ModeToggle />
                    </div>
                </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
