
async function getSideBarHeaderData(){

    const data: sideBarHeaderData = await fetch('http://localhost:3000/api/getData/sideBarHeader').then((res): Promise<sideBarHeaderData> => res.json());
    return data;
}

async function getSideBarFooterData(){

    const data: SideBarFooterDataType = await fetch('http://localhost:3000/api/getData/sideBarFooter').then((res): Promise<SideBarFooterDataType> => res.json());
    return data;
}

async function getPieChartData() {
    return await fetch('http://localhost:3000/api/getPieData')
        .then((res): Promise<PieChart[]> => res.json());
}

async function getRadarChartData() {
    return await fetch('http://localhost:3000/api/getRadarData').then((res): Promise<RadarChart[]> => res.json());
}

async function getLineChartData() {
    return await fetch('http://localhost:3000/api/getPieData').then((res): Promise<LineChartType[]> => res.json());
}

async function getBarChartData() {
    return await fetch('http://localhost:3000/api/getBarChartData').then((res): Promise<BarChartType[]> => res.json());
}

export {
    getSideBarHeaderData,
    getSideBarFooterData,
    getPieChartData,
    getRadarChartData,
    getLineChartData,
    getBarChartData
}