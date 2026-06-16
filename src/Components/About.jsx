import { FaRegCheckCircle } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";

const About = () => {
  return (
    // Use container padding instead of fixed widths
    <section className="w-full max-w-[1440px] mx-auto py-12 md:py-20 px-6 lg:px-20 bg-white">
      {/* Title */}
      <h1
        className="text-center text-amber-800 font-bold text-[40px] md:text-[40px] leading-[1] lg:flex lg:justify-center mb-12"
        style={{ fontFamily: "'Caudex', serif" }}
      >
        About Jobs N Visa
      </h1>

      {/* Main Layout: Flex-column on mobile, Flex-row on desktop */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-10">
        {/* Left: Image Container */}
        <div className="relative w-full sm:w-[90%] md:w-[85%] lg:w-[650px] h-[250px] sm:h-[300px] md:h-[380px] lg:h-[440px] mt-6 rounded-tl-[50px] sm:rounded-tl-[70px] lg:rounded-tl-[100px] rounded-tr-[50px] sm:rounded-tr-[70px] lg:rounded-tr-[100px] bg-green-100 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
          <div className="w-full h-full sm:w-[90%] md:w-[85%] lg:w-[540px] lg:h-[354px] mt-0 sm:mt-10 lg:mt-20 rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[80px] rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[80px] overflow-hidden shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
            <img
              className="w-full h-full object-cover"
              src={aboutImage}
              alt="About Jobs N Visa"
            />
          </div>
        </div>

        {/* Right: Content Card */}
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[780px] lg:min-h-[500px] rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[80px] rounded-tr-[20px] sm:rounded-tr-[30px] lg:rounded-tr-[80px] bg-white p-4 sm:p-6 md:p-10 flex flex-col justify-center">
          <p
            className="lg:text-[16px] sm:text-[15px] md:text-[16px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-green-950 font-medium text-justify mb-6 sm:mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            At Jobs N Visa, we understand that finding the right opportunities
            in our careers is more than just landing a job, it's about building
            a future. With over a decade of experience in the Australian job
            market, we specialize in connecting skilled professionals with
            employers across critical industries.
            <br />
            <br />
            Backed by a holistic approach and expert guidance in visa processes
            and tailored support, we make your journey to employment in
            Australia seamless, empowering you to succeed with confidence.
          </p>

          {/* Features - Stacked on mobile, remains as requested */}
          <div className="flex flex-col gap-4 sm:gap-4 mb-4">
            {[
              "Expert Visa Guidance",
              "Ongoing Professional Support",
              "Personalized Executive Search",
            ].map((item, index) => (
              <button
                key={index}
                className="w-full sm:w-fit lg:w-[300px] h-[38px] sm:h-[40px] lg:h-[41px] rounded-[6px] sm:rounded-[8px] border-[1px] border-[#B9F8CF] bg-[#F0FDF4] text-green-800 px-4 sm:px-5 flex items-center gap-2 shadow-[0px_0px_10px_2px_#049F441A] text-[13px] sm:text-[14px]"
              >
                <FaRegCheckCircle className="text-green-500 shrink-0" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
