import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Home = (props: Props) => {

    redirect('/dashboard');

  return (
    <div>Models</div>
  )
}

export default Home