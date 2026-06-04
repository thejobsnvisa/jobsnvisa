import { FaRegCheckCircle } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";
const About = () => {
  return (
    <div>
      <div className="w-[1440px] h-[589px] bg-white relative">
        <h1
          className="text-center text-amber-800 font-bold text-[40px] ml-16 leading-[1] tracking-[0%] pt-20 w-[331px] h-[52px]"
          style={{ fontFamily: "'Caudex', serif" }}
        >
          About Jobs N Visa
        </h1>
        <div className="w-[574px] h-[400px] top-[212px] left-[68px] rounded-tl-[60px] rounded-tr-[60px] absolute overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={aboutImage}
            alt="About Jobs N Visa"
          />
        </div>
        <div className="w-[780px] h-[500px] top-[115px] left-[710px] rounded-tl-[80px] rounded-tr-[80px] absolute bg-green-100 p-10">
          <p className="w-full text-[16px] p-4 leading-[30px] tracking-[0%] text-green-950 font-medium text-justify"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
            At Jobs N Visa, we understand that finding the right opportunities
            in our careers is more than just landing a job, it's about building
            a future. With over a decade of experience in the Australian job
            market, we specialize in connecting skilled professionals with
            employers across critical industries.<br /><br /> Backed by a holistic approach
            and expert guidance in visa processes and tailored support, we make
            your journey to employment in Australia seamless, empowering you to
            succeed with confidence.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <button className="w-[300px] h-[41px] rounded-[8px] gap-[8px] left-[30px] border-[1px] border-[#B9F8CF] bg-[#F0FDF4] text-green-800 px-5 py-2.5 cursor-pointer flex items-center gap-2" style={{ boxShadow: "0px 0px 10px 2px #049F441A" }}>
              <FaRegCheckCircle  className="text-green-500"/>
              Expert Visa Guidance
            </button>
            <button className="w-[300px] h-[41px] rounded-[8px] gap-[8px] left-[30px] border-[1px] border-[#B9F8CF] bg-[#F0FDF4] text-green-800 px-5 py-2.5 cursor-pointer flex items-center gap-2" style={{ boxShadow: "0px 0px 10px 2px #049F441A" }}>
              <FaRegCheckCircle className="text-green-500" />
              Ongoing Professional Support
            </button>
            <button className="w-[300px] h-[41px] rounded-[8px] gap-[8px] left-[30px] border-[1px] border-[#B9F8CF] bg-[#F0FDF4] text-green-800 px-5 py-2.5 cursor-pointer flex items-center gap-2" style={{ boxShadow: "0px 0px 10px 2px #049F441A" }}>
              <FaRegCheckCircle className="text-green-500" />
              Personalized Executive Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
