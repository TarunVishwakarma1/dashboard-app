type sideBarTeamData = {
    name: string,
    logo: string,
    plan: string
}

type sideBarHeaderData = {
    teams: sideBarTeamData[],
}

type PieChart = {
    browser: string,
    visitors: number,
    fill: string
}

type RadarChart = {
    month: string,
    desktop: number
}

type LineChartType = {
    browser: string,
    visitors: number,
    fill: string
}

type BarChartType = {
    date: string,
    desktop: number,
    mobile: number,
}