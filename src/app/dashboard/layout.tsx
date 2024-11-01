import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/side-bar/app-sidebar";
import * as React from "react";
import type {Metadata} from "next";

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
                {children}
            </SidebarProvider>
        </div>
    )
}
