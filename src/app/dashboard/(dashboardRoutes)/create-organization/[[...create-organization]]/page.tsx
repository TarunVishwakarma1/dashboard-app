import { CreateOrganization } from '@clerk/nextjs'

export default async function CreateOrganizationPage() {
  return (
  <div className='w-full h-full items-center justify-center flex flex-col'>
    <CreateOrganization path="/dashboard/create-organization" />
  </div>
  )
  
}