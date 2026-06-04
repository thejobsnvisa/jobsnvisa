import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";

const Who = () => {
  return (
    <section className="w-full min-h-[720px] bg-green-50 rounded-tl-[100px] rounded-tr-[100px]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1
          className="text-center text-green-800 font-bold text-[35px] mt-2"
          style={{ fontFamily: "'Caudex', serif" }}
        >
          Who Is Jobs N Visa For?
        </h1>

        <p className="text-center text-green-700 text-lg max-w-4xl mx-auto mt-6">
          Jobs N Visa is designed for professionals seeking global opportunities
          and employers looking for skilled talent.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
          {/* Card 1 */}
          <div
            className="relative w-[540px] h-[450px] rounded-tl-[80px] rounded-tr-[80px] overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(#21744480, #21744480),
                url(${img1})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 text-center">
              <h3
                className="font-semibold text-[24px] text-green-50 mb-4"
                style={{ fontFamily: "'Poppins', serif" }}
              >
                For Job Seekers
              </h3>

              <p className="w-[430px] text-[18px] leading-8 text-green-100 mt-6">
                Offering complete guidance in finding Australian job
                opportunities so that global talent can work and settle abroad
                smoothly.
              </p>

              <div className="flex flex-col items-center mt-10">
                <ul className="w-[295px] text-left font-semibold text-[16px] text-green-50 space-y-2 mb-8">
                  <li>• Verified and trusted job openings</li>
                  <li>• Complete work visa guidance</li>
                  <li>• Support for overseas career start</li>
                </ul>

                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-medium transition">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-[540px] h-[450px] rounded-tl-[80px] rounded-tr-[80px] overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(#21744480, #21744480),
                url(${img2})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 text-center">
              <h3
                className="font-semibold text-[24px] text-green-50 mb-4"
                style={{ fontFamily: "'Poppins', serif" }}
              >
                For Employers
              </h3>

              <p className="w-[430px] text-[18px] leading-8 text-green-100 mt-6">
                Providing end-to-end support to hire skilled global talent and
                manage visa sponsorships without any hassle.
              </p>

              <div className="flex flex-col items-center mt-10">
                <ul className="w-[447px] text-left font-semibold text-[16px] text-green-50 space-y-2 mb-8 ">
                  <li>• Access to pre-screened international candidates</li>
                  <li>• Labour agreement & visa guidance</li>
                  <li>• Assistance throughout recruitment and onboarding</li>
                </ul>

                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-medium transition">
                  Hire Talent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;