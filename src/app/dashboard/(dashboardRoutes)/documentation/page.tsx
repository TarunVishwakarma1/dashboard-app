import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Documentation = (props: Props) => {
    redirect('/dashboard');
  return (
    <div>Documentation</div>
  )
}

export default Documentation