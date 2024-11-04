import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from '@/components/ui/sidebar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const SideBarMenuProjects = ({data}: {data:ProjectsData}) => {
  return (
    <div>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarMenu>
                            {data.projects.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url ? item.url : '#'}>
                                    {item.icon && React.createElement(Icons[item.icon as keyof typeof Icons] as React.ElementType, { className: 'size-4' })}<span>{item.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction showOnHover className="focus-visible:ring-0 focus-visible:ring-offset-0">
                                            <Icons.MoreHorizontal />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 rounded-lg"
                                        side="bottom"
                                        align="end"
                                    >
                                        <DropdownMenuItem>
                                            <Icons.Folder className="text-muted-foreground" />
                                            <span>View Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Icons.Forward className="text-muted-foreground" />
                                            <span>Share Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Icons.Trash2 className="text-muted-foreground" />
                                            <span>Delete Project</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                             ))}
                             {/* commenting More sidebar option*/}
                             {/*<SidebarMenuItem>*/}
                             {/*    <SidebarMenuButton className="text-sidebar-foreground/70">*/}
                             {/*        <MoreHorizontal className="text-sidebar-foreground/70" />*/}
                             {/*        <span>More</span>*/}
                             {/*    </SidebarMenuButton>*/}
                             {/*</SidebarMenuItem>*/}
                             </SidebarMenu>
                         </SidebarGroup> 
    </div>
  )
}

export default SideBarMenuProjects