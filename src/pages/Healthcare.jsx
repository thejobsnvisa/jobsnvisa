import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";

const Healthcare = () => {
  return (
    <section className="max-w-[1420px] mx-auto px-4 pt-10 pb-12 overflow-x-hidden">
          <div className="flex flex-col items-center text-center mt-24 lg:mt-24">
            {/* Breadcrumb */}
            <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 md:px-12 py-8 md:py-10">
              {/* Background Image */}
              <img
                src={w1}
                alt="Background"
                className="hidden md:block absolute top-[-56px] left-[-120px] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
              />
    
              {/* Content */}
              <div className="relative z-10">
                {/* Breadcrumb */}
                <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
                 Home &gt; Healthcare
                </p>
                {/* Title */}
                <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
                 Healthcare Professionals
                </h1>
                {/* Subtitle */}
                <p className="mt-3 max-w-[739px] mx-auto text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
                  Comprehensive Guide to Healthcare Careers in Australia
                </p>
                <img
                  src={w2}
                  alt="Background"
                  className="hidden lg:block absolute top-[54px] lg:top-[10px] left-[1040px] w-[224px] h-[105px] "
                />{" "}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Healthcare
