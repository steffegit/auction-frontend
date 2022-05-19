import Ads from '../components/Ads'
import React, { useContext } from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import ContainerSoldItem from '../components/Containers/ContainerSoldItems'
import ContainerFeaturedItems from '../components/Containers/ContainerFeaturedItems'
import ContainerCurrentlyListed from '../components/Containers/ContainerCurrentlyListed'
import { SiteContext } from '../components/Context/Context'

function Home() {
  const { promotedCars, soldCars, currentCars } = useContext(SiteContext)

  return (
    <div className="flex flex-col max-w-5xl mx-auto scroll-smooth">
      {/* <TopBar /> */}
      <Ads />
      <ContainerFeaturedItems data={promotedCars} />
      <ContainerSoldItem data={soldCars} />
      <ContainerCurrentlyListed data={currentCars} />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
