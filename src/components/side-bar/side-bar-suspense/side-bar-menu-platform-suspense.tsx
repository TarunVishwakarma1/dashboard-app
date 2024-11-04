import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import SideBarMenu from '../side-bar-menu';
import { getSideBarMenuData } from '@/lib/get-data';
type Props = {}

const SidebarMenuSuspense = async() => {

    const response = await getSideBarMenuData();
    const data = response.data;

  return (
    <Suspense fallback={<Skeleton/>}>
        <SideBarMenu data={data}/>
    </Suspense>
  )
}

export default SidebarMenuSuspense