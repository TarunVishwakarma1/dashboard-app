import React from 'react'

const Home = async({params}: { params: { slug: string[] } }) => {
  const {slug} = await params;

  return (
    <div>{slug}</div>
  )
}

export default Home