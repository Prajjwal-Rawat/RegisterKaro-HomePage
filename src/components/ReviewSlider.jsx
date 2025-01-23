import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reviewImg from "../assets/Images/reviewImg.png"

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: reviewImg,
      rating: 5,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: reviewImg,
      rating: 4.5,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: reviewImg,
      rating: 4.5,
    },
    {
      id: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: reviewImg,
      rating: 4.5,
    },
    {
      id: 5,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: reviewImg,
      rating: 4.5,
    },
    
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-yellow-500 text-lg ${i <= Math.floor(rating) ? "" : "opacity-50"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="bg-[#1C4670] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center text-3xl font-bold mb-8">
          What people say about us
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start gap-4">
                <blockquote className="text-[#667085] italic">
                  <span className="text-4xl font-bold"
                  style={{
                    background: "linear-gradient(180deg, #FFA229 0%, #1C4670 78.12%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}>“</span>
                  {review.text}
                </blockquote>
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-gray-900 font-bold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.designation}</p>
                  </div>
                </div>
                <div className="flex mt-2 cursor-pointer">{renderStars(review.rating)}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSlider;
