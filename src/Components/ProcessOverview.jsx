import Process from "../assets/Process.svg";
const ProcessOverview = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-orange-300 text-2xl md:text-3xl font-bold mt-4 mb-8 md:mb-12"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
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
