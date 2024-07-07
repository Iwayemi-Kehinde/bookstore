import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import profile from "../assets/profile.jpg";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakPoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet consectetur inventore commodi praesentium odit
                  incidunt officiis. Inventore modi voluptatibus quas nobis
                  quisquam eum voluptas! Vitae nam autem exercitationem ipsum
                  ea.
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  rounded
                  className="w-10 mb-4"
                />
                <h3 className="text-lg font-medium">Mark Ping</h3>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet consectetur inventore commodi praesentium odit
                  incidunt officiis. Inventore modi voluptatibus quas nobis
                  quisquam eum voluptas! Vitae nam autem exercitationem ipsum
                  ea.
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  rounded
                  className="w-10 mb-4"
                />
                <h3 className="text-lg font-medium">Mark Ping</h3>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet consectetur inventore commodi praesentium odit
                  incidunt officiis. Inventore modi voluptatibus quas nobis
                  quisquam eum voluptas! Vitae nam autem exercitationem ipsum
                  ea.
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  rounded
                  className="w-10 mb-4"
                />
                <h3 className="text-lg font-medium">Mark Ping</h3>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7 ">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet consectetur inventore commodi praesentium odit
                  incidunt officiis. Inventore modi voluptatibus quas nobis
                  quisquam eum voluptas! Vitae nam autem exercitationem ipsum
                  ea.
                </p>
                <Avatar
                  alt="avatar of jese"
                  img={profile}
                  rounded
                  className="w-10 mb-4"
                />
                <h3 className="text-lg font-medium">Mark Ping</h3>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
