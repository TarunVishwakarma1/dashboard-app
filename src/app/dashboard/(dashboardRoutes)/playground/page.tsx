import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Home = async(props: Props) => {

    return redirect('/dashboard');

  return (
    <div>PlayGround</div>
  )
}

export default Home