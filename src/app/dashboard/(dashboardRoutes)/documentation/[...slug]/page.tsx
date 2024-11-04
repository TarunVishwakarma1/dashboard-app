import React from 'react'

const Home = ({params}: { params: { slug: string[] } }) => {

  return (
    <div>{params.slug}</div>
  )
}

export default Home