import bg from "../assets/bg-1.png";
import bg2 from "../assets/bg-3.png";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[800px] md:h-[650px] w-full flex flex-col  items-center justify-center text-white px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* decorative image hidden on mobile, shown on md+ to preserve desktop layout */}
        <img
          src={bg2}
          alt="Decorative background"
          className="hidden md:block absolute md:top-[188px] md:left-[40px] md:w-[307px] md:h-[461px]"
        />
        <h1 className="text-orange-300 font-semibold font-['outfit'] text-[45px] leading-[120%] tracking-[0%] mt-8 md:absolute md:right-[80px] md:top-[200px] md:text-right text-center">
          <span className="text-green-300"> Welcome to Jobs N Visa </span> <br />{" "}
          <span className="text-orange-300">& Start your Journey</span>
        </h1>
        <p className="mt-2 md:absolute md:top-[360px] md:right-[-150px] md:w-[450px] md:-translate-x-1/2 text-center text-white text-[24px] text-justify leading-[120%] tracking-[0%]">
          <span className="text-green-200">Connect with</span> top employers{" "}
          <span className="text-green-200">across</span> Australia's
          fastest-growing
          <span className="text-green-200"> industries We. </span> bridge the gap{" "}
          <span className="text-green-200">
            between talent and opportunity with{" "}
          </span>{" "}
         visa and employment solutions.
        </p>
        <div className="md:mt-2 mt-4 flex items-center gap-6 md:absolute md:top-[540px] md:right-[-60px] md:-translate-x-1/2">
          <a
            href="#"
            className="bg-green-100 text-green-800  font-semibold text-[14px] leading-[100%] tracking-[0%] py-5 px-6 rounded-tr-[14px] rounded-tl-[14px] w-[180px] md:w-[200px] h-[48px] transition duration-300 text-center"
          >
            Find Your Dream Job
          </a>
          <a
            href="#"
            className="bg-amber-100 text-amber-800  font-semibold text-[14px] leading-[100%] h-[48px] tracking-[0%] py-5 px-6 rounded-tr-[14px] rounded-tl-[14px] w-[120px] md:w-auto hover:bg-orange-100 transition duration-300 text-center"
          >
            Post A Job
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
