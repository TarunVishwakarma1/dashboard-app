"use client"

import {TrendingUp} from "lucide-react"
import {CartesianGrid, Dot, Line, LineChart} from "recharts"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart"

export const description = "A line chart with dots and colors"

/*const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]*/

const chartConfig = {
    visitors: {
        label: "Visitors",
        color: "hsl(var(--chart-2))",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function ChartLine({chartData}:{chartData:LineChartType[]}) {
    return (
        <Card className="w-full">
            <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-sm font-medium">Line Chart - Dots Colors</CardTitle>
                <CardDescription className="text-xs">January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="px-2 pb-2">
                <ChartContainer config={chartConfig} className="h-[190px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 15,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                        width={280}
                        height={95}
                    >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />
                        <Line
                            dataKey="visitors"
                            type="natural"
                            stroke="var(--color-visitors)"
                            strokeWidth={2}
                            dot={({ payload, ...props }) => {
                                return (
                                    <Dot
                                        key={payload.browser}
                                        r={3}
                                        cx={props.cx}
                                        cy={props.cy}
                                        fill={payload.fill}
                                        stroke={payload.fill}
                                    />
                                )
                            }}
                            activeDot={{ r: 4, strokeWidth: 1 }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2 pb-4 px-4 text-xs">
                <div className="flex gap-1 items-center font-medium">
                    Trending up by 5.2% <TrendingUp className="h-3 w-3" />
                </div>
                <div className="text-muted-foreground">
                    Last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}