import {getPieChartData} from "@/lib/get-data";
import DonutChart from "@/components/charts/pie-chart/piechart";

export default async function PieChartFallBack() {

    const data:PieChart[] = await getPieChartData()

    return (
        <div>
          <DonutChart chartData={data}/>
        </div>
    )
}