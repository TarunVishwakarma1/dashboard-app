import * as React from 'react';
import SideBarHeader from "@/components/side-bar/side-bar-header";
import {getSideBarHeaderData} from "@/lib/get-data";
import CustomFallBackSideBarHeader from '@/components/fallbacks/CustomFallBackSideBarHeader';

export default async function SideBarHeaderSuspense() {
    const data = await getSideBarHeaderData();
    
    return (
        <React.Suspense fallback={<CustomFallBackSideBarHeader/>}>
            <SideBarHeader data={data} />
        </React.Suspense>
    );
}
