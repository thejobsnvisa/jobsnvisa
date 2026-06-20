import r1 from "../assets/recruiter.png";
import r4 from "../assets/r4.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import job from "../assets/job.svg";
const Recruiter = () => {
  return (
    <section className="max-w-[1420px] mx-auto px-4 pt-10 pb-12">
      <div className="flex flex-col items-center text-center mt-24">
        {/* Breadcrumb */}
        <p className="font-[Poppins] text-[18px] font-normal leading-[100%] text-[#0D542B]">
          Home &gt; Services &gt; Recruiter Services
        </p>

        {/* Title */}
        <h1 className="mt-4 font-serif text-[22px] font-bold text-green-900">
          Recruiter Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[700px] font-[Poppins] text-[20px] italic font-semibold text-green-600">
          Find the right skilled employees and job-ready talent with confidence
        </p>

        <div className="w-full max-w-[1300px] min-h-[420px] mt-10 rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px] bg-green-100 mx-auto relative overflow-hidden">
          <div className="absolute top-[60px] left-[60px]">
            <h1 className="w-[366px] font-[Jost] font-bold italic text-[40px] leading-[120%] tracking-[0%] text-slate-600">
              Candidate Screening <br />& Vetting Service
            </h1>
            <p className="max-w-[450px] mt-10 ml-2 text-justify font-[Poppins] text-[18px] leading-[150%] text-green-900 text-left">
              Comprehensive candidate screening and professional vetting
              solutions to ensure you hire the most qualified and vetted
              healthcare professionals for your organization. We conduct
              thorough background checks, credential verification, and skills
              assessments.
            </p>
            <button className="absolute top-[290px] left-[60px] w-[220px] h-[48px] rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] py-[12px] px-[40px] inline-flex items-center justify-center gap-[20px] bg-green-800 text-white text-[16px] font-semibold">
              <img
                src={job}
                alt="job"
                className="w-7 h-6 brightness-0 invert"
              />
              Get Started
            </button>
          </div>
          <div className="absolute left-[670px] top-2 w-[626px] h-[411px]">
            <img
              src={r1}
              alt="recruiter image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[500px] bg-white py-10 mt-6">
        <h3
          className="max-w-[800px] mx-auto mt-8 text-[40px] font-bold text-amber-700 text-center"
          style={{
            fontFamily: "'Caudex', cursive",
            fontWeight: 700,
            lineHeight: "100%",
          }}
        >
          Onboarding & Retention Support
        </h3>
        <div className="max-w-[1350px] mx-auto mt-14 rounded-[40px] overflow-hidden">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-[400px]">
              <img
                src={r4}
                alt="Employee Onboarding"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(184.15deg, rgba(0, 0, 0, 0) 45.11%, rgba(0, 0, 0, 0.6) 64.99%, #000000 96.62%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-[354px] h-[27px] font-semibold">
                  Employee Onboarding
                </h4>
                <ul className="text-slate-300 text-[16px] w-[354px] h-[72px] text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>System & Access Setup Support</li>
                  <li>Documentation & Joining Formalities</li>
                  <li>Orientation & Company Policy Briefing</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-[400px]">
              <img
                src={r2}
                alt="Training & Development"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(184.15deg, rgba(0, 0, 0, 0) 45.11%, rgba(0, 0, 0, 0.6) 64.99%, #000000 96.62%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-[354px] h-[27px] font-semibold">
                  Training & Development
                </h4>
                <ul className="text-slate-300 text-[16px] w-[354px] h-[72px] text-center leading-[1.5] font-bold list-disc list-inside">
                  {" "}
                  <li>Skill Enhancement & Upskilling</li>
                  <li>Role-Specific Training Programs</li>
                  <li>Performance Monitoring & Feedback</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-[400px]">
              <img
                src={r3}
                alt="Retention & Engagement"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(184.15deg, rgba(0, 0, 0, 0) 45.11%, rgba(0, 0, 0, 0.6) 64.99%, #000000 96.62%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-[354px] h-[27px] font-semibold">
                  Retention & Engagement
                </h4>
                <ul className="text-slate-300 text-[16px] w-[354px] h-[72px] text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Employee Engagement Initiatives</li>
                  <li>Attrition Analysis & Retention Strategy</li>
                  <li>Ongoing HR Support & Issue Resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruiter;
