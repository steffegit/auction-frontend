import TopBar from '../components/TopBar'
import Ads from '../components/Ads'
import React from 'react'
import Footer from '../components/Footer'
import ContainerSoldItem from '../components/Containers/ContainerSoldItems'
import ContainerFeaturedItems from '../components/Containers/ContainerFeaturedItems'

function Home() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto">
      <TopBar />
      <Ads />
      {/* MOBILE ONLY FOR NOW */}
      <ContainerFeaturedItems />
      <ContainerSoldItem />
      <Footer />
    </div>
  )
}

export default Home
