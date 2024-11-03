import * as React from 'react';
import {getSideBarFooterData} from "@/lib/get-data";
import SideBarFooter from "@/components/side-bar/side-bar-footer";
import CustomFallBackSideBarHeader from '@/components/fallbacks/CustomFallBackSideBarHeader';

export default async function SideBarFooterSuspense() {

    const data:SideBarFooterDataType = await getSideBarFooterData();

    return (
        <React.Suspense fallback={<CustomFallBackSideBarHeader/>}>
            <SideBarFooter data={data}/>
        </React.Suspense>
        
    );
}