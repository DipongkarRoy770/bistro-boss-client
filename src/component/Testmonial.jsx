import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Section from "../shired/Section";

const Testmonial = () => {
  const [review, setReview] = useState([]);
  fetch("reviews.json")
    .then((res) => res.json())
    .then((data) => setReview(data));
  return (
    <>
      <Section
        subHeading={"---What Our Clients Say---"}
        Heading={"TESTIMONIALS"}
      ></Section>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-6"
      >
        {review.map((items) => (
          <SwiperSlide key={items._id}>
            <div className="text-center px-20 bg-red-100 py-16 items-center justify-center">
              <h3 className="text-semibold text-xl text-rose-400">
                {items.name}
              </h3>
              <p>{items.details}</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testmonial;
