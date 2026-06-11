import visionImage from "../assets/visionImage.png";

const Vision = () => {
  return (
    <div className="w-full px-4 overflow-hidden">
      {/* 
        Container: 
        Mobile: Full width, auto height, flex column 
        Desktop: lg:w-[1420px] lg:h-[498px] absolute-like behavior 
      */}
      <div className="w-full lg:w-[1420px] lg:h-[498px] lg:mt-[70px] lg:mx-auto rounded-tl-[30px] lg:rounded-tl-[120px] rounded-tr-[30px] lg:rounded-tr-[120px] bg-green-100 relative flex flex-col lg:block items-center py-10 lg:py-0">
        
        {/* Image: Stays fixed on desktop, responsive on mobile */}
        <div className="w-[300px] h-[300px] lg:w-[478px] lg:h-[400px] lg:top-[100px] lg:left-[-30px]  rounded-tl-[120px] rounded-tr-[60px] lg:absolute overflow-hidden mb-8 lg:mb-0">
          <img
            className="w-full h-full object-cover"
            src={visionImage}
            alt="Vision Jobs N Visa"
          />
        </div>

        {/* Text Section: lg: classes keep it exactly as it was on desktop */}
        <h1
          className="text-center text-green-950 font-bold text-3xl lg:text-4xl leading-tight lg:pt-12 lg:ml-40"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Our Vision
        </h1>
        <p
          className="text-center text-amber-700 font-bold text-2xl lg:text-4xl leading-tight pt-4 lg:pt-12 lg:ml-[560px]"
          style={{ fontFamily: "'Dangrek', cursive" }}
        >
          Building Bridges to New Beginnings
        </p>

        {/* Cards: Responsive grid */}
        <div className="lg:w-7/12 grid gap-6 sm:grid-cols-2 lg:left-[560px] lg:top-[250px] lg:absolute w-[90%] lg:w-[700px] mt-8 lg:mt-[-15px] lg:ml-24">
          <div className="rounded-[30px] bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 className="text-lg font-semibold text-slate-950 mb-3 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
              Personalized Executive Search
            </h2>
            <p className="text-[16px] leading-6 text-slate-600 text-center p-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
              To be a trusted partner in helping individuals and families achieve their Australian migration dreams through innovative and reliable visa solutions.
            </p>
          </div>

          <div className="rounded-[30px] bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 className="text-lg font-semibold text-slate-950 mb-3 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
              Global Leadership
            </h2>
            <p className="text-[16px] leading-6 text-slate-600 text-center p-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
              To establish Jobs N Visa as a leader in ethical, client-focused migration consulting, delivering exceptional results worldwide.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Vision;