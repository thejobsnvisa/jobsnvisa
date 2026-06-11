import { FaRegCheckCircle } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";

const About = () => {
  return (
    // Use container padding instead of fixed widths
    <section className="w-full max-w-[1440px] mx-auto py-12 md:py-20 px-6 lg:px-20 bg-white">
      
      {/* Title */}
      <h1
        className="text-center text-amber-800 font-bold text-[32px] md:text-[40px] leading-[1] lg:flex lg:justify-start mb-12"
        style={{ fontFamily: "'Caudex', serif" }}
      >
        About Jobs N Visa
      </h1>

      {/* Main Layout: Flex-column on mobile, Flex-row on desktop */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-10">
        
        {/* Left: Image Container */}
        {/* Uses lg:w-[574px] and lg:h-[400px] to match your desktop specs */}
        <div className="w-full max-w-[574px] h-[360px] lg:h-[380px] rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[60px] lg:rounded-tr-[60px] overflow-hidden lg:mt-32">
          <img
            className="w-full h-full object-cover"
            src={aboutImage}
            alt="About Jobs N Visa"
          />
        </div>

        {/* Right: Content Card */}
        {/* Uses lg:w-[780px] to match your desktop specs */}
        <div className="w-full lg:w-[780px] lg:min-h-[500px] rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[80px] lg:rounded-tr-[80px] bg-green-100 p-6 md:p-10 flex flex-col justify-center">
          <p className="text-[16px] leading-[30px] text-green-950 font-medium text-justify mb-8"
             style={{ fontFamily: "'Poppins', sans-serif" }}>
            At Jobs N Visa, we understand that finding the right opportunities in our careers is more than just landing a job, it's about building a future. With over a decade of experience in the Australian job market, we specialize in connecting skilled professionals with employers across critical industries.<br /><br /> 
            Backed by a holistic approach and expert guidance in visa processes and tailored support, we make your journey to employment in Australia seamless, empowering you to succeed with confidence.
          </p>
          
          {/* Features - Stacked on mobile, remains as requested */}
          <div className="flex flex-col gap-4">
            {[
              "Expert Visa Guidance",
              "Ongoing Professional Support",
              "Personalized Executive Search"
            ].map((item, index) => (
              <button 
                key={index}
                className="w-full lg:w-[300px] h-[41px] rounded-[8px] border-[1px] border-[#B9F8CF] bg-[#F0FDF4] text-green-800 px-5 flex items-center gap-2 shadow-[0px_0px_10px_2px_#049F441A]"
              >
                <FaRegCheckCircle className="text-green-500 shrink-0"/>
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