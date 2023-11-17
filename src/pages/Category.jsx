import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";
import Section from "../shired/Section";

const Category = () => {
  return (
   <section className="my-20">
    <Section
    subHeading={'----from :11 am to :12 pm----'}
    Heading={'Ordered by Online'}
    ></Section>
     <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-6 "
    >
      <SwiperSlide>
        <img className="w-full h-96" src={slider1} alt="" />
        <h4 className="text-4xl text-center -mt-16 font-semibold text-orange-400">PIZZA</h4>
      </SwiperSlide>
      <SwiperSlide>
        
          <img className="w-full h-96" src={slider2} alt="" />
          <h4 className="text-4xl text-center -mt-16 font-semibold text-orange-400">SALAD</h4>
      </SwiperSlide>
      <SwiperSlide>
        
          <img className="w-full h-96" src={slider3} alt="" />
          <h4 className="text-4xl text-center -mt-16 font-semibold text-orange-400">SUPS</h4>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full h-96" src={slider4} alt="" />
      <h4 className="text-4xl text-center -mt-16 font-semibold text-orange-400">DESSERT</h4>
      </SwiperSlide>
      <SwiperSlide>
        
          <img className="w-full h-96" src={slider5} alt="" />
          <h4 className="text-4xl text-center -mt-16 font-semibold text-orange-400">PIZZA</h4>
        
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Category;
