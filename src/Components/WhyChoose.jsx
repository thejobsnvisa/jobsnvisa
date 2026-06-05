import WhyChooseImage from "../assets/Vector.svg";
import handshake from "../assets/Handshake.svg";
import space from "../assets/space.svg";
import shield from "../assets/shield.svg";
import medal from "../assets/Medal.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const WhyChoose = () => {
  const items = [
    { title: "Trusted Partnerships", desc: "Strong relationships with leading sponsors who trust us to find their ideal candidates.", image: handshake },
    { title: "Fast Track Process", desc: "Streamlined application and placement process that gets you started quickly.", image: space },
    { title: "Secure and Reliable", desc: "Licensed migration agents and registered employment services for your peace of mind.", image: shield },
    { title: "Industry Expertise", desc: "Deep understanding of Australian job market trends and requirements across major industries.", image: medal },
  ];

  return (
    <section className="bg-white my-[100px] w-full px-4">
      <div className="container mx-auto">
        <div className="relative w-full">
          {/* Background Image - Set to be responsive */}
          <img
            className="w-full h-auto min-h-[500px] object-cover rounded-[40px]"
            src={WhyChooseImage}
            alt="Why Choose Us"
          />

          <div className="absolute inset-0 flex flex-col items-center pt-[40px] md:pt-[60px]">
            {/* Heading - Responsive text sizes */}
            <h2 className="text-[28px] md:text-[40px] text-center text-green-800 font-bold whitespace-normal px-4">
              Why Choose Jobs N Visa?
            </h2>

            <p className="text-[16px] md:text-[20px] text-center text-green-800 font-medium mt-2 px-4">
              Your Success Is Our Achievement
            </p>

            {/* Slider Wrapper */}
            <div className="w-full mt-10 md:mt-16 px-4 md:px-12">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                pagination={{ clickable: true }}
                observer={true}
                observeParents={true}
                spaceBetween={20}
                className="!overflow-visible pb-12 relative"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
              >
                <style>{`
                  .swiper-pagination { 
                    bottom: -30px !important;
                    position: relative !important;
                    display: flex !important;
                    justify-content: center !important;
                    gap: 8px;
                  }
                  .swiper-pagination-bullet { 
                    background: #065f46 !important; 
                    opacity: 0.35; 
                    width: 12px; 
                    height: 12px;
                    margin: 0 !important;
                  }
                  .swiper-pagination-bullet-active { opacity: 1 !important; }
                `}</style>

                {items.map((item, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="w-full max-w-[350px] h-[180px] rounded-tl-[40px] rounded-tr-[40px] bg-green-50 border border-green-200 p-6 mx-auto shadow-[0px_0px_10px_2px_#049F441A] flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-green-600/80 blur-xl rounded-full"></div>
                        <img src={item.image} alt={item.title} className="relative z-10 w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-green-800 text-[18px] font-bold mb-2">{item.title}</h3>
                        <p className="text-green-800 text-[13px] font-medium leading-5 line-clamp-3">{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;