import * as React from 'react';
import {getSideBarFooterData} from "@/lib/get-data";
import SideBarFooter from "@/components/side-bar/side-bar-footer";

export default async function SideBarFooterSuspense() {

    const data:SideBarFooterDataType = await getSideBarFooterData();

    return (
        <SideBarFooter data={data}/>
    );
}