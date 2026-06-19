import r1 from "../assets/recruiter.png";
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
    </section>
  );
};

export default Recruiter;
