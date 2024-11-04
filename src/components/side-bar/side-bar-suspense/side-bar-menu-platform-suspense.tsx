import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import SideBarMenu from '../side-bar-menu';
import { getSideBarMenuDataPlatform } from '@/lib/get-data';

const SidebarMenuPlatformSuspense = async() => {

    const response = await getSideBarMenuDataPlatform();
    const data = response.data;

  return (
    <Suspense fallback={<Skeleton/>}>
        <SideBarMenu data={data}/>
    </Suspense>
  )
}

export default SidebarMenuPlatformSuspense