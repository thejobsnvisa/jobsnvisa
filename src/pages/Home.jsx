import About from "../Components/About";
import Hero from "../Components/Hero";
import Vision from "../Components/Vision";
import WhyChoose from "../Components/WhyChoose";
import Who from "../Components/Who";
import ProcessOverview from "../Components/ProcessOverview";
import FAQ from "../Components/FAQ";
import background from "../assets/background.jpg";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Vision />
      <WhyChoose />
      <Who />
      <ProcessOverview />
      <FAQ />
      <div className="w-full flex justify-center">
          <div
          className="relative w-full max-w-[1300px] min-h-[450px] rounded-tl-[80px] rounded-tr-[80px] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="absolute inset-0 bg-[#217444]/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
            <h2 className="absolute top-[40px] left-[534px] w-[231px] h-[52px] flex items-center justify-center text-center text-[40px] leading-[100%] font-normal text-green-100">
              Get In Touch
            </h2>
            <div className="w-full max-w-[1138px] h-[192px] grid gap-6 lg:grid-cols-3 relative top-[40px] left-[38px] opacity-100">
              
              <div className="bg-white/80 backdrop-blur-md rounded-tl-[30px] rounded-tr-[30px] w-[286px] h-[192px] p-8 shadow-xl opacity-100">
                <h3 className="text-xl text-orange-600 mb-3 justify-center">Email</h3>
                <p className="text-black font-semibold">info@jobsnvisa.com.au</p>
                <p className="text-emerald-900 mt-2">Response within 24 hours</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-tl-[30px] rounded-tr-[30px] w-[286px] h-[192px] p-8 shadow-xl opacity-100">
                <h3 className="text-xl text-orange-600 mb-3 justify-center">Phone</h3>
                <p className="text-black font-semibold">+61 3 8764 3335</p>
                <p className="text-emerald-900 mt-2">Monday – Friday 9:00 AM – 6:00 PM AEST</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-tl-[30px] rounded-tr-[30px] w-[286px] h-[192px] p-8 shadow-xl opacity-100">
                <h3 className="text-xl text-orange-600 mb-3 justify-center">Locations</h3>
                <p className="text-black font-semibold">Sydney, Melbourne, Brisbane</p>
                <p className="text-emerald-900 mt-2">Serving all of Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
