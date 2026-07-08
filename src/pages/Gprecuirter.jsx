import w1 from "../assets/w1.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import h1 from "../assets/h1.svg";
import c2 from "../assets/c2.svg";
import h2 from "../assets/h2.svg";
import w2 from "../assets/Vector1.svg";
import job from "../assets/job.svg";
import { useState } from "react";
const Gprecuirter = () => {
  const cards = [
    {
      icon: h1,
      title: "DPA & Regional Focus",
      description:
        "We provide specialized support for all your GP hiring needs.",
    },
    {
      icon: h2,
      title: "Global GP Talent",
      description:
        "Hire skilled General Practitioners from UK, Ireland, Canada, New Zealand.",
    },
    {
      icon: c2,
      title: "Fully Compliant",
      description:
        "We provide specialized support for all your GP hiring needs.",
    },
  ];

  // 0 = first card center, 1 = second card center, 2 = third card center
  const [centerIndex, setCenterIndex] = useState(1);

  const handleClick = (clickedIndex) => {
    setCenterIndex(clickedIndex);
  };

  const getPosition = (index) => {
    if (index === centerIndex) return "center";

    if (
      (centerIndex === 0 && index === 2) ||
      (centerIndex === 1 && index === 0) ||
      (centerIndex === 2 && index === 1)
    ) {
      return "left";
    }

    return "right";
  };

  return (
    <div>
      <section className="max-w-[1440px] mx-auto px-4 pt-10 pb-12 overflow-x-hidden">
        <div className="flex flex-col items-center text-center mt-24 lg:mt-24">
          {/* Hero Section */}
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 md:px-12 py-8 md:py-10">
            {/* Background Image */}
            <img
              src={w1}
              alt="Background"
              className="hidden md:block absolute top-[-56px] left-[-100px] opacity-[90%] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Breadcrumb */}
              <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
                Home &gt; Recruiter
              </p>
              {/* Title */}
              <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
                GP Recruiter Services
              </h1>
              {/* Subtitle */}
              <p className="mt-3 max-w-[739px] mx-auto text-[16px] md:text-[20px]  font-semibold text-green-700 text-center">
                Expert General Practitioner Recruitment in Australia
              </p>
              <img
                src={w2}
                alt="Background"
                className="hidden lg:block absolute top-[54px] lg:top-[10px] left-[1040px] w-[224px] h-[105px] "
              />{" "}
            </div>
          </div>
          <div className="w-full max-w-[1440px] mx-auto mt-10 px-5 lg:px-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-[28px] lg:text-[32px] text-start font-semibold leading-tight text-green-900">
                  GP Recruitment Services
                </h3>

                <h6 className="mt-3 text-[22px] lg:text-[24px] font-semibold text-start leading-tight text-green-600">
                  Australia's General Practitioner Recruitment Specialist
                </h6>

                <p className="mt-6 text-[15px] lg:text-[18px] leading-8 text-green-900 text-justify">
                  Jobs N Visa, an Australian healthcare recruitment specialist,
                  focuses on recruiting qualified General Practitioners. We help
                  GP clinics, medical centres, and healthcare groups in
                  sourcing, screening, and hiring skilled local and
                  international GPs.
                  <br />
                  <br />
                  Our lawful recruitment solutions also manage migration
                  pathways, ensuring that clinics hire the best global talent to
                  deliver excellent patient care and strengthen their practice.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="h-12 px-8 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] bg-green-800 text-white font-semibold flex items-center justify-center gap-3">
                    <img
                      src={job}
                      alt="job"
                      className="w-6 h-6 brightness-0 invert"
                    />
                    Hire a GP
                  </button>

                  <button className="h-12 px-8 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] bg-slate-500 text-white font-semibold flex items-center justify-center gap-3">
                    <img
                      src={job}
                      alt="job"
                      className="w-6 h-6 brightness-0 invert"
                    />
                    Book Discovery Session
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 flex justify-end">
                <div className="relative left-0 md:left-[48px] w-full md:w-[450px] h-[300px] md:h-[520px] bg-[#E6F5EB] rounded-b-[40px] md:rounded-b-[80px]">
                  <img
                    src={g1}
                    alt="Doctor"
                    className="
        absolute 
        bottom-0
        ml-[-25px]
        xl:ml-[-60px]
        lg:ml-[-260px]
        md:ml-[-420px]
        w-full 
        md:w-[760px]
        h-[300px]
        md:h-[520px]
        max-w-none
        object-cover
        xl:translate-x-[-340px]
      "
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-full max-w-[1440px] rounded-[40px] lg:rounded-[100px]  mt-10 bg-cover bg-center px-4 py-10 md:px-8 md:py-0 h-auto md:h-[520px]"
            style={{
              backgroundImage: `linear-gradient(180deg,#038E44B2,#038E44B2),url(${g2})`,
            }}
          >
            <div className="text-center pt-12">
              <p className="text-[32px] font-semibold text-white">
                Smarter GP Hiring Starts Here
              </p>

              <p className="mt-4 text-[22px] text-green-100">
                End-to-End Recruitment Service with Migration Support
              </p>
            </div>

            <div className="relative w-full h-auto md:h-[320px] mt-8">
              {cards.map((card, index) => {
                const position = getPosition(index);

                const classes =
                  position === "left"
                    ? "relative mx-auto mt-6 w-full max-w-[340px] md:absolute md:left-[-20px] lg:left-[20px] xl:left-[140px] md:top-10 md:w-[200px] lg:w-[250px] md:h-[200px] md:scale-95 md:z-10"
                    : position === "center"
                      ? "relative mx-auto mt-6 w-full max-w-[340px] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 md:w-[300px] lg:w-[350px] md:h-[270px] md:scale-100 md:z-20"
                      : "relative mx-auto mt-6 w-full max-w-[340px] md:absolute md:right-[-20px] lg:right-[20px] xl:right-[140px] md:top-10 md:w-[200px] lg:w-[250px] md:h-[200px] md:scale-95 md:z-10";

                return (
                  <div
                    key={card.title}
                    onClick={() => handleClick(index)}
                    className={`rounded-[40px] bg-white cursor-pointer transition-all duration-700 ease-in-out flex flex-col items-center ${classes}`}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className={`w-10 h-10 ${position === "center" ? "mt-12" : "mt-9"}`}
                    />

                    <p className="mt-8 text-[18px] font-medium text-green-700 text-center px-5">
                      {card.title}
                    </p>

                    <p
                      className={`mt-4 text-center text-green-950 ${
                        position === "center"
                          ? "w-[250px] mx-auto"
                          : "text-sm px-5 md:hidden"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gprecuirter;
