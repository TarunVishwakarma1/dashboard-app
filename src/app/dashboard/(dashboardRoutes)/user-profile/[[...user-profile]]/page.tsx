import { Skeleton } from '@/components/ui/skeleton'
import { UserProfile } from '@clerk/nextjs'
import React, { Suspense } from 'react'

type Props = {}

const UserSettings =async (props: Props) => {
  return (
    <div className='h-full w-full items-center justify-center flex flex-col'>
      <Suspense fallback={<Skeleton className='h-full w-full dark:bg-gray-700 bg-gray-300 rounded-2xl'/>}>
        <UserProfile path="/dashboard/user-profile" />
      </Suspense> 
    </div>
  )
}

export default UserSettings