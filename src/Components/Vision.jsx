import visionImage from "../assets/visionImage.png";
import bg1 from "../assets/bg1.jpg";

const Vision = () => {
  return (
    <section className="w-full px-4 mt-[70px]">
      <div
        className="relative mx-auto max-w-[1420px] h-[498px]
  overflow-hidden rounded-tr-[120px]
  rounded-br-[120px] rounded-bl-[120px]
  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(141,219,174,0.55),
        rgba(141,219,174,0.55)
      ),
      url(${bg1})
    `,
        }}
      >
        {/* Left Image */}
        <div className="absolute left-0 bottom-0 w-[420px] h-[380px]">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <h2
            className="text-[40px] font-bold text-[#1E5B42]"
            style={{ fontFamily: "Caudex, serif" }}
          >
            Our Vision
          </h2>

          <p
            className="mt-3 text-[40px] text-[#D97706]"
            style={{ fontFamily: "Dangrek, cursive" }}
          >
            Building Bridges to New Beginnings
          </p>
        </div>

        {/* Cards: Responsive grid */}
        <div className="lg:w-7/12 grid gap-6 sm:grid-cols-2 lg:left-[400px] lg:top-[250px] lg:absolute w-[90%] lg:w-[800px] mt-8 lg:mt-[-15px] lg:ml-24">
          <div className="rounded-[30px] bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2
              className="text-lg font-semibold text-slate-950 mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Personalized Executive Search
            </h2>
            <p
              className="text-[16px] leading-6 text-slate-600 text-center p-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              To be a trusted partner in helping individuals and families
              achieve their Australian migration dreams through innovative and
              reliable visa solutions.
            </p>
          </div>

          <div className="rounded-[30px] bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2
              className="text-lg font-semibold text-slate-950 mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Global Leadership
            </h2>
            <p
              className="text-[16px] leading-6 text-slate-600 text-center p-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              To establish Jobs N Visa as a leader in ethical, client-focused
              migration consulting, delivering exceptional results worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
