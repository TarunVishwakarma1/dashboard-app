import * as React from "react"
import {Suspense} from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/theme-provider/mode-toggle"
import BarChartInteractive from "@/components/charts/bar-chart/BarChartInteractive"
import ChartRadar from "@/components/charts/radar-chart/radar-chart"
import {ChartLine} from "@/components/charts/line-chart/line-chart"
import {Skeleton} from "@/components/ui/skeleton";
import PieChartFallBack from "@/components/fallbacks/chartFallback/PieChartFallBack";
import RadarChartFallBack from "@/components/fallbacks/chartFallback/RadarChartFallBack";
import LineChartFallBack from "@/components/fallbacks/chartFallback/LineChartFallBack";
import BarChartInteractiveFallback from "@/components/fallbacks/chartFallback/BarChartInteractiveFallback";

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
                        <div className="aspect-video rounded-xl bg-muted/50">
                            <Suspense fallback={<Skeleton className="aspect-video rounded-xl bg-muted/50"/>}>
                                <PieChartFallBack />
                            </Suspense>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50">
                            <Suspense fallback={<Skeleton className="aspect-video rounded-xl bg-muted/50"/>}>
                                <RadarChartFallBack/>
                            </Suspense>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50">
                            <Suspense fallback={<Skeleton className="aspect-video rounded-xl bg-muted/50"/>}>
                                <LineChartFallBack/>
                            </Suspense>
                        </div>
                    </div>
                    <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <Suspense fallback={<Skeleton className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"/>}>
                            <BarChartInteractiveFallback/>
                        </Suspense>
                    </div>
                </div>
            </SidebarInset>
        </>
    )
}