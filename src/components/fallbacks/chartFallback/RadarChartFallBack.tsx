import {getRadarChartData} from "@/lib/get-data";
import ChartRadar from "@/components/charts/radar-chart/radar-chart";

export default async function RadarChartFallBack() {

    const data:RadarChart[] = await getRadarChartData()

    return (
        <div>
            <ChartRadar chartData={data}/>
        </div>
    )
}