import * as React from "react"
import {Suspense} from "react"
import {Skeleton} from "@/components/ui/skeleton";
import PieChartFallBack from "@/components/fallbacks/chartFallback/PieChartFallBack";
import RadarChartFallBack from "@/components/fallbacks/chartFallback/RadarChartFallBack";
import LineChartFallBack from "@/components/fallbacks/chartFallback/LineChartFallBack";
import BarChartInteractiveFallback from "@/components/fallbacks/chartFallback/BarChartInteractiveFallback";

export default async function Page() {
    return (
        <>
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
                            <div className="h-full">
                                <BarChartInteractiveFallback/>
                            </div>
                        </Suspense>
                    </div>
                </div>
        </>
    )
}