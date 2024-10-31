import * as React from 'react';
import SideBarHeader from "@/components/side-bar/side-bar-header";
import {getSideBarHeaderData} from "@/lib/get-data";

export default async function SideBarHeaderSuspense() {
    const data = await getSideBarHeaderData();
    return (
            <SideBarHeader data={data} />
    );
}