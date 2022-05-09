import ItemCard from "./components/ItemCard";
import TopBar from "./components/TopBar";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.css";

function App() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <TopBar />
      {/* MOBILE ONLY FOR NOW */}
      <div>
        <div className="flex pt-10 pl-5 text-xl font-bold">
          Swipe to view featured auctions...
        </div>
        <Swiper>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
