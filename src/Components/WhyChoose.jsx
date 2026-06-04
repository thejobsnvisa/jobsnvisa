import WhyChooseImage from "../assets/file.svg";
import handshake from "../assets/Handshake.svg";
import space from "../assets/space.svg";
import shield from "../assets/shield.svg";
import medal from "../assets/medal.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const WhyChoose = () => {
  const items = [
    {
      title: "Trusted Partnerships",
      desc: "Strong relationships with leading sponsors who trust us to find their ideal candidates.",
      image: handshake,
    },
    {
      title: "Fast Track Process",
      desc: "Streamlined application and placement process that gets you started quickly.",
      image: space,
    },
    {
      title: "Secure and Reliable",
      desc: "Licensed migration agents and registered employment services for your peace of mind.",
      image: shield,
    },
    {
      title: "Industry Expertise",
      desc: "Deep understanding of Australian job market trends and requirements across major industries.",
      image: medal,
    },
  ];

  return (
    <section className="bg-white mt-[100px] mb-[100px]">
      <div className="container mx-auto">
        <div className="relative">
          {/* Background Image */}
        <div
  className="w-full h-[550px]"
  style={{
    backgroundImage: `url(${WhyChooseImage})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto 100%",
  }}
></div>

          <div className="absolute inset-0 flex flex-col items-center">
            {/* Heading */}
            <h2 className="absolute text-[32px] md:text-[40px] leading-[52px] text-center text-green-800 top-[40px] left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
              Why Choose Jobs N Visa?
            </h2>

            <p className="absolute top-[102px] left-1/2 -translate-x-1/2 text-center text-green-800 text-[18px] md:text-[20px] font-medium whitespace-nowrap">
              Your Success Is Our Achievement
            </p>

            {/* Slider Wrapper - Added responsive padding top classes here */}
            <div className="absolute top-[210px] sm:top-[220px] md:top-[240px] lg:top-[260px] w-full px-6">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return index < 4 ? `<span class="${className}"></span>` : '';
                  },
                }}
                spaceBetween={40}
                /* Explictly allowed overflow out of the slider box to accommodate the bullets */
                className="!overflow-visible" 
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {/* Fixed Pagination Styling with direct bottom offset positioning */}
                <style>{`
                  .swiper-pagination-bullet { 
                    background: #065f46 !important; 
                    opacity: 0.35; 
                    width: 10px; 
                    height: 10px;
                    margin: 0 6px !important;
                  }
                  .swiper-pagination-bullet-active { 
                    background: #065f46 !important; 
                    opacity: 1; 
                  }
                  /* This class forces space directly beneath your slider cards */
                  .swiper-pagination { 
                    position: absolute !important;
                    bottom: -45px !important; 
                    left: 0 !important;
                    width: 100% !important;
                  }
                `}</style>

                {[...items, ...items].map((item, idx) => (
                  <SwiperSlide key={idx} className="pb-4">
                    <div
                      className="w-[350px] h-[180px] rounded-tl-[40px] rounded-tr-[40px] bg-green-50 border border-green-200 p-6 overflow-hidden mx-auto"
                      style={{
                        boxShadow: "0px 0px 10px 2px #049F441A",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-2 bg-green-600/80 blur-xl rounded-full "></div>

                          <img
                            src={item.image}
                            alt={item.title}
                            className="relative z-10 w-12 h-12 object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 relative left-[10px]">
                          <h3 className="text-green-800 text-[18px] md:text-[20px] font-bold mb-2 truncate">
                            {item.title}
                          </h3>

                          <p className="text-green-800 text-[13px] md:text-[14px] font-medium leading-5 line-clamp-4">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;