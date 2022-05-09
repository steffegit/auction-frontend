import ItemCard from '../components/ItemCard'
import TopBar from '../components/TopBar'
import Ads from '../components/Ads'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function Home() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <TopBar />
      <Ads />
      {/* MOBILE ONLY FOR NOW */}
      <div>
        <div className="flex pt-10 pl-5 text-xl font-bold">
          Swipe to view featured auctions...
        </div>
        <Swiper>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC), Fahrassistenz-System: Verkehrszeichenerkennung, Insassen-Schutzsystem proaktiv, Mobiltelefon Schnittstelle Premium (inkl. Bluetooth-/Audio-Schnittstelle), Multimedia-Schnittstelle USB (iPhone / iPod) mit AUX-IN, Radioempfang digital (DAB+), Raucher-Paket, Rückfahrkamera, Sitzbezug / Polsterung: Stoff / Alcantara, Sonderlackierung Oryx-Weiß Perlmutt-Effekt, Sport & Sound-Paket, Top-Paket, Winterbereifung zusätzlich (Kundenangabe erforderlich), Zusatzheizung (Standheizung)'
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC), Fahrassistenz-System: Verkehrszeichenerkennung, Insassen-Schutzsystem proaktiv, Mobiltelefon Schnittstelle Premium (inkl. Bluetooth-/Audio-Schnittstelle), Multimedia-Schnittstelle USB (iPhone / iPod) mit AUX-IN, Radioempfang digital (DAB+), Raucher-Paket, Rückfahrkamera, Sitzbezug / Polsterung: Stoff / Alcantara, Sonderlackierung Oryx-Weiß Perlmutt-Effekt, Sport & Sound-Paket, Top-Paket, Winterbereifung zusätzlich (Kundenangabe erforderlich), Zusatzheizung (Standheizung)'
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC), Fahrassistenz-System: Verkehrszeichenerkennung, Insassen-Schutzsystem proaktiv, Mobiltelefon Schnittstelle Premium (inkl. Bluetooth-/Audio-Schnittstelle), Multimedia-Schnittstelle USB (iPhone / iPod) mit AUX-IN, Radioempfang digital (DAB+), Raucher-Paket, Rückfahrkamera, Sitzbezug / Polsterung: Stoff / Alcantara, Sonderlackierung Oryx-Weiß Perlmutt-Effekt, Sport & Sound-Paket, Top-Paket, Winterbereifung zusätzlich (Kundenangabe erforderlich), Zusatzheizung (Standheizung)'
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Home
