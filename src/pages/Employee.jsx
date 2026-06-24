import { useState } from "react";
import s1 from "../assets/s1.png";
import r4 from "../assets/r4.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import r5 from "../assets/r5.png";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c7 from "../assets/c7.svg";
import c8 from "../assets/c8.svg";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";
import d7 from "../assets/d7.png";
import d8 from "../assets/d8.png";
import v1 from "../assets/v1.svg";
import v2 from "../assets/v2.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import c6 from "../assets/c6.svg";
import job from "../assets/job.svg";
import h1 from "../assets/h1.png";
import GetInTouch from "../Components/GetInTouch";
const Employee = () => {
  const payrollCards = [
    {
      icon: c1,
      title: "Accurate Pay",
      description:
        "Transparent wage calculations aligned with Australian standards.",
    },
    {
      icon: c2,
      title: "Award Compliance",
      description: "Pay rates aligned with Fair Work Awards and agreements.",
    },
    {
      icon: c3,
      title: "Payslips & Records",
      description:
        "Clear pay slips, tax reporting, and superannuation tracking.",
    },
    {
      icon: c4,
      title: "On-Time Payments",
      description: "Reliable, on-schedule salary payments.",
    },
    {
      icon: c7,
      title: "Legal Protection",
      description: "Compliance with Fair Work, WHS, and employment laws.",
    },
    {
      icon: c8,
      title: "Worker Confidence",
      description: "Your workplace rights and entitlements are protected.",
    },
  ];

  // Permanent & Executive Recruitment section specific dataset configuration
  const executiveCards = [
    {
      id: 1,
      bgImage: d5,
      title: "Career Growth",
      description: "Opportunities offering development and progression.",
      icon: c6,
    },
    {
      id: 2,
      bgImage: d6,
      title: "Career Stability",
      description: "Long-term roles aligned with your skills and experience.",
      icon: p2,
    },
    {
      id: 3,
      bgImage: d7,
      title: "Employer Matching",
      description: "Jobs matched to your preferences and career objectives.",
      icon: v1,
    },
    {
      id: 4,
      bgImage: d8,
      title: "Overseas Candidates",
      description:
        "Support for international professionals seeking permanent roles.",
      icon: v2,
    },
  ];

  const [selectedIcon, setSelectedIcon] = useState();

  return (
    <section className="max-w-[1420px] mx-auto px-4 pt-10 pb-12 overflow-x-hidden">
      <div className="flex flex-col items-center text-center mt-24 lg:mt-24">
        {/* Breadcrumb */}
        <p className="font-[Poppins] text-[15px]  md:text-[18px] font-normal leading-[100%] text-[#0D542B]">
          Home &gt; Services &gt; Employee Services
        </p>

        {/* Title */}
        <h1 className="mt-4 font-serif text-[20px] md:text-[22px] font-bold text-green-900">
          Employee Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[700px] font-[Poppins] text-[16px] md:text-[20px] italic font-semibold text-green-600 px-2">
          Find the right job, visa guidance and growth opportunities in
          Australia
        </p>

        {/* Hero Card Banner */}
        <div className="w-full max-w-[1300px] min-h-auto lg:min-h-[420px] mt-10 rounded-2xl lg:rounded-tl-[70px] lg:rounded-tr-[70px] lg:rounded-br-[70px] bg-green-100 mx-auto relative overflow-hidden flex flex-col lg:block p-6 md:p-10 lg:p-0">
          <div className="relative lg:absolute lg:top-[60px] lg:left-[60px] flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-none">
            <h1 className="w-full lg:w-[366px] font-[Jost] font-bold italic text-[26px] md:text-[32px] lg:text-[40px] leading-[120%] tracking-[0%] text-slate-600">
              Flexible Labour Hire <br />& Job Opportunities
            </h1>
            <p className="max-w-[450px] mt-4 lg:mt-10 lg:ml-2 text-justify font-[Poppins] text-[15px] md:text-[17px] lg:text-[18px] leading-[150%] text-green-900">
              Access casual, contract, and short-term job opportunities with
              compliant Australian employers. JobsNVisa connects you to flexible
              roles that match your availability, experience, and career goals,
              while ensuring fair pay and workplace protections.
            </p>
            <button className="relative lg:absolute mt-6 lg:mt-0 lg:top-[290px] lg:left-[60px] w-[220px] h-[48px] rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] py-[12px] px-[40px] inline-flex items-center justify-center gap-[20px] bg-green-800 text-white text-[16px] font-semibold">
              <img
                src={job}
                alt="job"
                className="w-7 h-6 brightness-0 invert"
              />
              Get Started
            </button>
          </div>
          <div className="relative lg:absolute w-full lg:w-[626px] h-[220px] md:h-[320px] lg:h-[411px] lg:left-[670px] lg:top-2 mb-6 lg:mb-0 order-1 lg:order-none">
            <img
              src={s1}
              alt="recruiter image"
              className="w-full h-full object-cover rounded-xl lg:rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Onboarding & Retention Support */}
      <div className="w-full max-w-full lg:max-w-[1440px] lg:h-[500px] bg-white py-10 mt-6">
        <h3
          className="max-w-[800px] mx-auto mt-8 text-[26px] md:text-[34px] lg:text-[40px] font-bold text-amber-700 text-center px-4"
          style={{
            fontFamily: "'Caudex'",
            fontWeight: 700,
            lineHeight: "120%",
          }}
        >
          Onboarding & Retention Support
        </h3>
        <div className="max-w-[1350px] mx-auto mt-10 lg:mt-14 rounded-[40px] overflow-hidden px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px]">
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
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Workplace Onboarding
                </h4>
                <ul className="text-slate-300 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Employment contracts & documentation</li>
                  <li>Workplace induction & safety briefing</li>
                  <li>Role clarity & expectations</li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px]">
              <img
                src={s2}
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
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Ongoing Support
                </h4>
                <ul className="text-slate-300 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Issue resolution & employer liaison</li>
                  <li>HR assistance during employment</li>
                  <li>Assignment continuity support</li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px] md:col-span-2 lg:col-span-1">
              <img
                src={s3}
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
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Retention & Stability
                </h4>
                <ul className="text-slate-300 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Temp-to-perm transitions</li>
                  <li>Long-term career planning</li>
                  <li>Performance check-ins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Employers Trust Our Payroll Services */}
      <div
        className="w-full max-w-full lg:max-w-[1500px] h-auto lg:h-[760px] rounded-[30px] lg:rounded-[100px] overflow-hidden mx-auto relative mt-16 py-12 px-4"
        style={{ background: "#69D29A80" }}
      >
        <img
          src={r5}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#69D29A80]" />

        <div className="relative z-10">
          <p
            className="text-center text-[24px] md:text-[30px] lg:text-[35px] font-bold text-green-950 px-2"
            style={{ fontFamily: "'Caudex'" }}
          >
            Fair Pay & Workplace Compliance
          </p>

          {/* Desktop Absolute Grid Map - Displays only on Desktop/1440px+ widths */}
          <div className="relative xl:block hidden w-full h-[560px] mt-10">
            {payrollCards.map((card, index) => {
              const positions = [
                "left-[310px] top-[60px]",
                "left-[680px] top-[60px]",
                "left-[1050px] top-[60px]",
                "left-[140px] top-[330px]",
                "left-[510px] top-[330px]",
                "left-[880px] top-[330px]",
              ];
              const isActive = selectedIcon === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedIcon(index)}
                  onMouseLeave={() => setSelectedIcon(undefined)}
                  className={`absolute cursor-pointer transition-all duration-500 ease-out ${positions[index]}`}
                >
                  <div
                    className={`flex flex-col items-center text-center rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] border bg-green-50 border-green-200 transition-all duration-500 ease-out ${
                      isActive
                        ? "w-[250px] h-[260px] bg-[#F7FCF8] border-[#B9F8CF] px-4 pt-4 shadow-lg"
                        : "w-[132px] h-[125px] items-center justify-center"
                    }`}
                  >
                    <div className="w-[65px] h-[65px] rounded-[14px] border border-[#B9F8CF] bg-[#DCFCE7] flex items-center justify-center">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className={`object-contain ${isActive ? "w-6 h-6" : "w-8 h-8"}`}
                      />
                    </div>
                    {isActive && (
                      <>
                        <h3 className="mt-6 text-[18px] font-bold text-[#0A8A3D]">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-[16px] italic text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile, Tablet & 1024px Laptop View LayoutFallback */}
          <div className="xl:hidden grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 relative z-20 max-w-[1000px] mx-auto">
            {payrollCards.map((card, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedIcon(selectedIcon === index ? undefined : index)
                }
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-green-50/90 border border-green-200 shadow-sm transition-all"
              >
                <div className="w-[50px] h-[50px] rounded-xl border border-[#B9F8CF] bg-[#DCFCE7] flex items-center justify-center mb-3">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#0A8A3D] leading-tight">
                  {card.title}
                </h4>
                <p className="mt-2 text-[12px] text-slate-600 hidden md:block">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Labour Hire Solutions */}
      <div className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto text-center px-4">
          <h2
            className="text-[26px] md:text-[32px] lg:text-[35px] font-bold text-green-900 mb-4"
            style={{
              fontFamily: "'Caudex'",
              fontWeight: 700,
              lineHeight: "120%",
            }}
          >
            Labour Hire Opportunities
          </h2>
          <p
            className="text-[15px] md:text-[18px] lg:text-[20px] font-medium text-green-700 max-w-[600px] mx-auto mb-10"
            style={{
              fontFamily: "'Poppins'",
              fontWeight: 500,
              lineHeight: "140%",
            }}
          >
            Flexible work options with compliant Australian employers
          </p>

          {/* Fully responsive layout grid that elegantly drops absolute positions on 1024px screens */}
          <div className="relative w-full flex flex-col md:grid md:grid-cols-1 lg:grid-cols-3 xl:block gap-6 items-center justify-center">
            {/* Box 1 */}
            <div className="w-full max-w-[280px] h-auto min-h-[150px] xl:absolute xl:top-[100px] xl:left-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] p-6 bg-green-100 text-left shadow-sm">
              <p className="font-extrabold text-[14px] text-green-800">
                Casual & Contract Roles
              </p>
              <ul className="font-medium text-[12px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Short-term and ongoing assignments</li>
                <li>Flexible shifts</li>
                <li>Immediate start roles</li>
              </ul>
            </div>

            {/* Middle Graphic Asset */}
            <div className="w-full max-w-[450px] mx-auto md:col-span-2 lg:col-span-1 xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-0">
              <img
                src={h1}
                alt="h1"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            {/* Box 2 */}
            <div className="w-full max-w-[280px] h-auto min-h-[150px] xl:absolute xl:top-[10px] xl:right-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] p-6 bg-green-100 text-left shadow-sm">
              <p className="font-extrabold text-[14px] text-green-800">
                Job-Ready Placement
              </p>
              <ul className="font-medium text-[12px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Skills and availability matching</li>
                <li>Right-to-work verification</li>
                <li>Pre-placement briefing</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="w-full max-w-[280px] h-auto min-h-[150px] md:col-span-1 lg:col-span-1 xl:absolute xl:top-[240px] md:right-[-50px] xl:right-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] p-6 bg-green-100 text-left shadow-sm mx-auto">
              <p className="font-extrabold text-[14px] text-green-800">
                Temp-to-Perm Pathways
              </p>
              <ul className="font-medium text-[12px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Performance-based permanency</li>
                <li>Employer-sponsored transitions</li>
                <li>Reduced employment risk</li>
              </ul>
            </div>
          </div>

          <div className="hidden xl:block h-[450px]" />
        </div>
      </div>

      {/* Our Services Section */}
      <div className="w-full xl:w-[1440px] h-auto lg:h-[625px] bg-white py-10 lg:py-0">
        <div className="w-full xl:w-[1312px] h-auto lg:h-[384px] py-10 lg:pt-[60px] rounded-2xl lg:rounded-none lg:rounded-tr-[70px] lg:rounded-br-[70px] bg-green-100 px-4 md:px-8 lg:px-0">
          <p
            className="text-center text-[26px] md:text-[32px] lg:text-[35px] font-bold text-green-900"
            style={{
              fontFamily: "'Caudex'",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            Pre-Employment Support & Registration
          </p>
          <p
            className="w-full xl:w-[682px] font-[Poppins] font-medium text-[15px] md:text-[18px] lg:text-[20px] xl:ml-[405px] mt-3 text-green-600 text-center xl:text-start"
            style={{
              lineHeight: "140%",
            }}
          >
            Get job-ready with structured guidance and compliance support
          </p>

          <div className="mt-10 lg:mt-20 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-[60px] px-2 md:px-4">
            {/* Service Box 1 */}
            <div className="relative w-full max-w-[450px] min-h-[300px] p-6 rounded-[40px] lg:rounded-[50px] bg-white shadow-[0px_35px_60px_-15px_rgba(0,88,41,0.25)] flex flex-col items-center justify-center">
              <div className="hidden lg:block absolute -inset-2 w-10 h-10 ml-[135px] lg:ml-[210px] mt-14 lg:mt-16 bg-green-600/90 blur-lg rounded-full"></div>{" "}
              <img
                src={p3}
                 className="w-[36.5px] h-[49px] object-contain mb-4"
                alt="icon"
              />
              <p className="font-[Poppins] font-semibold text-[17px] md:text-[19px] lg:text-[20px] text-green-600 text-center px-2">
                Pre-Employment Preparation
              </p>
              <ul className="w-full font-normal text-[14px] md:text-[16px] lg:text-[18px] text-slate-900 text-center mt-4 list-disc list-inside space-y-1">
                <li>Document readiness checks</li>
                <li>Employer expectations briefing</li>
                <li>Resume and profile optimisation</li>
              </ul>
            </div>

            {/* Service Box 2 */}
            <div className="relative w-full max-w-[450px] min-h-[300px] p-6 rounded-[40px] lg:rounded-[50px] bg-white shadow-[0px_35px_60px_-15px_rgba(0,88,41,0.25)] flex flex-col items-center justify-center">
              <div className="hidden lg:block absolute -inset-2 w-10 h-10 ml-[135px] sm:ml-[250px] lg:ml-[210px] mt-12 sm:mt-16 lg:mt-16 bg-green-600/90 blur-lg rounded-full"></div>
              <img
                src={p4}
                className="w-[26.5px] h-[39px] object-contain mb-4"
                alt="icon"
              />
              <p className="font-[Poppins] font-semibold text-[17px] md:text-[19px] lg:text-[20px] text-green-600 text-center px-2">
                Registration & Compliance
              </p>
              <ul className="w-full font-normal text-[14px] md:text-[16px] lg:text-[18px] text-slate-900 text-center mt-4 list-disc list-inside space-y-1">
                <li>Licensing guidance</li>
                <li>Police checks & verification</li>
                <li>Employer documentation support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Permanent & Executive Recruitment Section with Reveal-on-Hover Feature */}
      <div className="w-full max-w-[1440px] mx-auto bg-white py-10 mt-16 md:mt-24 lg:mt-32 mb-12 px-4">
        <h3
          className="max-w-[892px] mx-auto text-[24px] md:text-[30px] lg:text-[35px] font-bold text-green-900 text-center px-2"
          style={{
            fontFamily: "'Caudex'",
            fontWeight: 700,
            lineHeight: "130%",
          }}
        >
          Permanent Job Placement Opportunities
        </h3>

        <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {executiveCards.map((card) => (
            <div
              key={card.id}
              className="group relative w-full h-[270px] md:h-[300px] lg:h-[320px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 shadow-md"
            >
              {/* Default Image Display Layer */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Linear Gradient with Text Overlay for Default View */}
              <div
                className="absolute   transform -translate-x-1/2 bottom-0 flex flex-col justify-end px-5 pb-3 gap-[6px] transition-opacity duration-500 opacity-100 group-hover:opacity-0 rounded-b-[30px]"
                style={{
                  width: "100%",
                  height: 93,
                  background:
                    "linear-gradient(360deg, #006124 0%, rgba(2, 124, 47, 0.66) 43.72%, rgba(0, 151, 56, 0) 83.12%)",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  paddingBottom: 12,
                }}
              >
                <p className="text-white text-center lg:text-center font-bold text-[14px] md:text-[16px] leading-snug tracking-wide">
                  {card.title}
                </p>
              </div>

              {/* Clean Dark-Green Solid Info Screen Layer Revealed on Hover */}
              <div className="absolute inset-0 bg-[#056835] p-5 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto rounded-[30px]">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-[41.67px] h-[41.67px] mb-3 object-contain brightness-0 invert"
                />
                <h4 className="text-white font-bold text-[15px] md:text-[15px] leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-green-100 font-[Poppins] text-[13px] md:text-[13px] leading-relaxed max-w-[240px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GetInTouch />
    </section>
  );
};

export default Employee;
