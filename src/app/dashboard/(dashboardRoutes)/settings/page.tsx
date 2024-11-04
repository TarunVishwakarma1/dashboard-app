import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Settings = async(props: Props) => {
    redirect('/dashboard');
  return (
    <div>Settings</div>
  )
}

export default Settings