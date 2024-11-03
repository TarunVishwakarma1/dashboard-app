import axios from 'axios';
import { vercelURL } from './constants';
import { currentUser } from '@clerk/nextjs/server';

async function getSideBarHeaderData() {
    const { data } = await axios.get<sideBarHeaderData>(`${vercelURL}/api/getData/sideBarHeader`);
    return data;
}

async function getSideBarFooterData(): Promise<SideBarFooterDataType> {

    const userData = await currentUser();

    if(!userData) {
       throw new Error('User not found');
    }

    const data: SideBarFooterDataType = {user: {
        name: userData.firstName + " "+userData.lastName,
        email: userData.emailAddresses[0]?.emailAddress ?? '',
        avatar: userData.imageUrl ?? ''
    }};
    return data;
}

async function getPieChartData() {
    const { data } = await axios.get<PieChart[]>(`${vercelURL}/api/getPieData`);
    return data;
}

async function getRadarChartData() {
    const { data } = await axios.get<RadarChart[]>(`${vercelURL}/api/getRadarData`);
    return data;
}

async function getLineChartData() {
    const { data } = await axios.get<LineChartType[]>(`${vercelURL}/api/getPieData`);
    return data;
}

async function getBarChartData() {
    const { data } = await axios.get<BarChartType[]>(`${vercelURL}/api/getBarChartData`);
    return data;
}

export {
    getSideBarHeaderData,
    getSideBarFooterData,
    getPieChartData,
    getRadarChartData,
    getLineChartData,
    getBarChartData
}
