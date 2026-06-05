import Process from '../assets/Process.png'
const ProcessOverview = () => {
  const steps = [
    { title: "Inquiry", desc: "Online: query by contacting us through WhatsApp or website or call us directly." },
    { title: "Registration", desc: "Book a consultation with our agent and get the best services." },
    { title: "Documentation", desc: "Gather and prepare all required documents." },
    { title: "Lodgment", desc: "Lodge your visa application with precision." },
    { title: "Support", desc: "Receive ongoing guidance throughout the process." },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-orange-300 text-3xl font-bold mb-12" style={{ fontFamily: "'Dangrek', cursive" }}>
          Process Overview
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Stethoscope Image - Scales down on mobile */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img 
              src={Process} 
              alt="Process" 
              className="w-[250px] lg:w-[400px] h-auto object-contain opacity-[]" 
            />
          </div>

          {/* Grid Layout - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-2/3">
            {steps.map((step, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-600 shadow-sm">
                <h3 className="font-bold text-green-900 text-lg mb-2">{step.title}</h3>
                <p className="text-green-700 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;