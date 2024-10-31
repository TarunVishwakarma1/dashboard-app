import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/side-bar/app-sidebar";
import * as React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                {children}
            </SidebarProvider>
        </div>
    )
}
