import Process from "../assets/Process.svg";
const ProcessOverview = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
         <h2
          className="text-center text-orange-300 font-bold text-[40px] lg:text-[40px] mt-2"        >
          Process Overview
        </h2>

        {/* Desktop View */}
        <div className="flex justify-center w-full">
          <img
            src={Process}
            alt="Process Overview"
            className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[14400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
