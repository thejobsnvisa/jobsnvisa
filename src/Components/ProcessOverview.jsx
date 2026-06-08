import Process from "../assets/Process.png";
const ProcessOverview = () => {
  const steps = [
    {
      title: "Inquiry",
      description: "Raise query by contacting us through WhatsApp / website or call us directly."
    },
    {
      title: "Registration",
      description: "Book a consultation with our agent and get the best services."
    },
    {
      title: "Documentation",
      description: "Gather and prepare all required documents."
    },
    {
      title: "Lodgment",
      description: "Lodge your visa application with precision."
    },
    {
      title: "Support",
      description: "Receive ongoing guidance throughout the process."
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-orange-300 text-2xl md:text-3xl font-bold mt-4 mb-8 md:mb-12"
          style={{ fontFamily: "'Dangrek', cursive" }}
        >
          Process Overview
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-6">
          <div className="relative w-full lg:w-1/3 flex justify-center">
            <img
              src={Process}
              alt="Process"
              className="relative z-10 w-[250px] lg:w-[485px] h-[485px] rotate-[20deg] object-contain opacity-50"
            />
            <div className="absolute bg-green-100 w-[954px] h-[300px] top-[100px] left-[360px] rounded-tl-[50px] rounded-tr-[50px]">
              <div className="absolute w-[260px] p-4 top-[170px] left-[25px] rounded-[30px] mb-4">
                <h3
                  className="text-[20px] font-semibold text-center text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Inquiry
                </h3>
                <p
                  className="font-normal w-[165px] text-[14px] ml-8 leading-[20px] text-center text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Raise query by contacting us through WhatsApp / website or
                  call us directly.
                </p>
              </div>
              <div className="absolute w-[260px] p-4 top-[30px] left-[190px] rounded-[30px]">
                <h3
                  className="text-[20px] w-[160px] ml-8 font-semibold text-center text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Registration
                </h3>
                <p
                  className="font-normal w-[165px] ml-8 text-[14px] leading-[20px] text-center text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Book a consultation with our agent and get the best services.
                </p>
              </div>
              <div className="absolute w-[260px] p-4 top-[170px] left-[385px] rounded-[30px]">
                <h3
                  className="text-[20px] font-semibold text-center text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Documentation
                </h3>
                <p
                  className="font-normal w-[165px] text-[14px] ml-8 leading-[20px] text-center text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Gather and prepare all required documents.
                </p>
              </div>
              <div className="absolute w-[260px] p-4 top-[30px] left-[565px] rounded-[30px]">
                <h3
                  className="text-[20px] w-[160px] ml-8 font-semibold text-center text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Lodgment
                </h3>
                <p
                  className="font-normal w-[165px] ml-8 text-[14px] leading-[20px] text-center text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Lodge your visa application with precision.{" "}
                </p>
              </div>
              <div className="absolute w-[260px] p-4 top-[170px] left-[685px] rounded-[30px]">
                <h3
                  className="text-[20px] font-semibold text-center text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Support
                </h3>
                <p
                  className="font-normal w-[165px] text-[14px] ml-8 leading-[20px] text-center text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }} 
                >
                  Receive ongoing guidance throughout the process.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet and Mobile View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-green-100 rounded-[20px] p-4 md:p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-green-700 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-sm md:text-base">
                    {index + 1}
                  </div>
                </div>
                <h3
                  className="text-lg md:text-xl font-semibold text-green-700 mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-normal text-sm md:text-base leading-relaxed text-[#313131]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
