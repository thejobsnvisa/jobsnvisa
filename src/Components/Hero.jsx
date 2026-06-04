import bg from "../assets/bg-1.png";
import bg2 from "../assets/bg-3.png";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[650px] w-full flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={bg2}
          alt="Decorative background"
          className="absolute top-[188px] left-[40px] w-[307px] h-[461px]"
        />
        <h1 className="absolute right-[40px] top-[200px] text-right text-orange-300 font-[Outfit] font-semibold text-[45px] leading-[1] tracking-[0%]"
        style={{ fontFamily: "'Outfit', sans-serif" }}>
          Welcome to JobsNVisa
          <br /> & Start your Journey
        </h1>
        <p
          className="absolute top-[400px] left-1/2 w-[560px] -translate-x-1/2 text-center text-white font-[Caveat] text-[28px] leading-[100%] tracking-[0%]"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Connect with top employers across Australia's fastest-growing
          industries.
          <br />
          We bridge the gap between talent and opportunity with personalized
          visa and employment solutions.
        </p>
        <div className="absolute top-[580px] left-1/2 -translate-x-1/2 flex items-center gap-4">
          <a
            href="#"
            className="bg-green-100 text-green-800 font-[Outfit] font-semibold text-[15px] leading-[100%] tracking-[0%] py-4 px-6 rounded-tr-[14px] rounded-tl-[14px] w-[200px] h-[48px] transition duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Find Your Dream Job
          </a>
          <a
            href="#"
            className="bg-amber-100 text-amber-800 font-[Outfit] font-semibold text-[15px] leading-[100%] h-[48px] tracking-[0%] py-4 px-6 rounded-tr-[14px] rounded-tl-[14px]  hover:bg-orange-100 transition duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Post A Job
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
