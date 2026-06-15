import visionImage from "../assets/visionImage.png";
import bg1 from "../assets/bg1.jpg";

const Vision = () => {
  return (
    <section className="w-full px-4 mt-[70px]">
      <div
        className="relative mx-auto max-w-[1420px] min-h-[520px] overflow-hidden rounded-[30px] sm:rounded-[40px] lg:rounded-[120px] bg-cover bg-center bg-no-repeat"
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
        <div className="hidden lg:block absolute lg:left-0 lg:bottom-0 lg:w-[420px] lg:h-[380px]">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>

        <div className="relative z-10 pt-8 sm:pt-10 lg:pt-8 text-center px-2 sm:px-4">
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E5B42]"
            style={{ fontFamily: "Caudex, serif" }}
          >
            Our Vision
          </h2>

          <p
            className="mt-3 text-2xl sm:text-3xl lg:text-[40px] text-[#D97706]"
            style={{ fontFamily: "Dangrek, cursive" }}
          >
            Building Bridges to New Beginnings
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-8 grid w-full max-w-[360px] gap-6 sm:max-w-[720px] sm:grid-cols-2 lg:absolute lg:left-[460px] lg:top-[220px] lg:max-w-[800px] px-2 sm:px-0">
          <div className="rounded-[30px] bg-white/90 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2
              className="text-lg sm:text-xl font-semibold text-slate-950 mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Personalized Executive Search
            </h2>
            <p
              className="text-sm sm:text-base leading-6 text-slate-600 text-center p-2 sm:p-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              To be a trusted partner in helping individuals and families
              achieve their Australian migration dreams through innovative and
              reliable visa solutions.
            </p>
          </div>

          <div className="rounded-[30px] bg-white/90 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2
              className="text-lg sm:text-xl font-semibold text-slate-950 mb-3 text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Global Leadership
            </h2>
            <p
              className="text-sm sm:text-base leading-6 text-slate-600 text-center p-2 sm:p-4"
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
