import Process from "../assets/Process.svg";
const ProcessOverview = () => {
  return (
    <section className="w-full py-6 md:py-10 px-4">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-center text-orange-300 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
          Process Overview
        </h2>

        {/* Desktop View */}
        <div className="flex justify-center w-full mt-6">
          <img
            src={Process}
            alt="Process Overview"
            className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
