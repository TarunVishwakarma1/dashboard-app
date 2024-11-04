import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import SideBarMenuProjects from '../side-bar-menu-projects'
import { getSideBarMenuDataProject } from '@/lib/get-data'

const SideBarMenuProjectsSuspense = async() => {

    const {data} = await getSideBarMenuDataProject();

  return (
    <Suspense fallback={<Skeleton/>}>
        <SideBarMenuProjects data={data} />
    </Suspense>
  )
}

export default SideBarMenuProjectsSuspense