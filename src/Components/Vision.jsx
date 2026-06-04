import visionImage from "../assets/visionImage.png";

const Vision = () => {
  return (
    <div>
      <div className="w-[1420px] h-[498px] top-[70px] left-[70px] rounded-tl-[120px] rounded-tr-[120px] bg-green-100 relative">
        <div className="w-[478px] h-[400px] top-[100px] left-[-30px] rounded-tl-[60px] rounded-tr-[60px] absolute overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={visionImage}
            alt="Vision Jobs N Visa"
          />
        </div>
        <h1
          className="text-center text-green-950 font-bold text-4xl leading-tight pt-12 ml-40"
          style={{ fontFamily: "Caudex, serif" }}
        >
          Our Vision
        </h1>
        <p
          className="text-center text-amber-700 font-bold text-4xl leading-tight pt-12 ml-[560px]"
          style={{ fontFamily: "'Dangrek', cursive" }}
        >
          Building Bridges to New Beginnings
        </p>
        <div>
          <div className="lg:w-7/12 grid gap-6 sm:grid-cols-2 left-[560px] top-[250px] absolute w-[300px] h-[216px]">
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
    </div>
  );
};

export default Vision;
