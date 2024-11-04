"use client"
import { useOrganizationList } from "@clerk/nextjs";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, GalleryVerticalEnd, Plus } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import CustomFallBackSideBarHeader from "../fallbacks/CustomFallBackSideBarHeader";

export default function SideBarHeader({data}:{data:sideBarHeaderData}) {
    const { userMemberships, setActive, isLoaded} = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const [activeOrg, setActiveOrg] = React.useState(userMemberships.data?.[0]?.organization);

    React.useEffect(() => {
        if (isLoaded && userMemberships.data) {
            setActiveOrg(userMemberships.data[0]?.organization);
        }
    }, [userMemberships.data]);

    if (!isLoaded || !userMemberships.data) {
        return <CustomFallBackSideBarHeader/>;
    }

    console.log('userMemberships: ', userMemberships);
    console.log('activeOrg: ', activeOrg);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center">
                                <img src={activeOrg?.imageUrl} alt={activeOrg?.name} className="size-8 rounded-sm" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    {activeOrg?.name}
                                </span>
                                <span className="truncate text-xs">
                                    {activeOrg?.membersCount} members
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        align="start"
                        side="bottom"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Organizations
                        </DropdownMenuLabel>
                        {userMemberships.data.map((membership, index) => {
                            const org = membership.organization;
                            console.log('org: ', org);
                            return (
                                <DropdownMenuItem
                                    key={org.id}
                                    onClick={() => {
                                        setActiveOrg(org);
                                        setActive?.({ organization: org.id });
                                    }}
                                    className="gap-2 p-2"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-sm border">
                                        {org.imageUrl ? (
                                            <img src={org.imageUrl} alt={org.name} className="size-6 rounded-sm" />
                                        ) : (
                                            <GalleryVerticalEnd className="size-4 shrink-0" />
                                        )}
                                    </div>
                                    {org.name}
                                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            );
                        })}
                        <DropdownMenuSeparator />
                        <Link href="/dashboard/create-organization">
                            <DropdownMenuItem className="gap-2 p-2">
                                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                    <Plus className="size-4" />
                                </div>
                                <div className="font-medium text-muted-foreground">
                                    Add Organization
                                </div>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}