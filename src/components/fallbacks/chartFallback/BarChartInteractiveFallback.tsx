import {getBarChartData} from "@/lib/get-data";
import BarChartInteractive from "@/components/charts/bar-chart/BarChartInteractive";

export default async function BarChartInteractiveFallback() {

    const data:BarChartType[] = await getBarChartData()

    return (
        <div className="h-full">
            <BarChartInteractive chartData={data}/>
        </div>
    )
}