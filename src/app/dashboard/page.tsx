import * as React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/theme-provider/mode-toggle"
import DonutChart from "@/components/charts/pie-chart/piechart"
import BarChartInteractive from "@/components/charts/bar-chart/BarChartInteractive"
import ChartRadar from "@/components/charts/radar-chart/radar-chart"
import { ChartLine } from "@/components/charts/line-chart/line-chart"

export default async function Page() {
    return (
        <>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center gap-2 px-4 ml-auto">
                        <ModeToggle />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50"><DonutChart /></div>
                        <div className="aspect-video rounded-xl bg-muted/50"><ChartRadar /></div>
                        <div className="aspect-video rounded-xl bg-muted/50"><ChartLine /></div>
                    </div>
                    <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <BarChartInteractive />
                    </div>
                </div>
            </SidebarInset>
        </>
    )
}