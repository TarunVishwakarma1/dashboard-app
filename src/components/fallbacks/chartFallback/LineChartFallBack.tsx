import {getLineChartData} from "@/lib/get-data";
import {ChartLine} from "@/components/charts/line-chart/line-chart";

export default async function LineChartFallBack() {

    const data:LineChartType[] = await getLineChartData()

    return (
        <div>
            <ChartLine chartData={data}/>
        </div>
    )
}