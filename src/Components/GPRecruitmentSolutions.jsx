import {
  Search,
  ClipboardCheck,
  FileText,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import c4 from "../assets/Vector2876.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const steps = [
  {
    icon: Search,
    title: "GP Talent Sourcing",
    points: [
      "Source local and international GPs",
      "Ensure placements in all locations",
      "Select qualified & experienced candidates",
    ],
    top: "58%",
    left: "11.5%",
    position: "bottom",
    align: "center",
    image: img1,
  },
  {
    icon: ClipboardCheck,
    title: "Screening & Verification",
    points: [
      "CV & background assessment",
      "Clinical experience review",
      "Reference verification",
    ],
    top: "70%",
    left: "32%",
    position: "top",
    align: "center",
    image: img2,
  },
  {
    icon: FileText,
    title: "AHPRA Support",
    points: [
      "Documentation checks",
      "Commencement planning",
      "Registration guidance",
    ],
    top: "38%",
    left: "52%",
    position: "bottom",
    align: "center",
    image: img3,
  },
  {
    icon: Briefcase,
    title: "Hiring & Placement",
    points: [
      "Permanent & contract roles",
      "DPA placements",
      "Onboarding coordination",
    ],
    top: "48%",
    left: "72%",
    position: "top",
    align: "center",
    image: img4,
  },
  {
    icon: ShieldCheck,
    title: "Migration Ready Recruitment",
    points: [
      "Employer-sponsored pathways",
      "Migration coordination",
      "Visa eligibility guidance",
    ],
    top: "19%",
    left: "92%",
    position: "bottom",
    align: "center",
    image: img5,
  },
];
export default function GPRecruitmentSolutions() {
  return (
    <section className="mt-6">
      <div className="max-w-[1550px] mx-auto justify-strat flex">
        <div className=" w-[1440px] h-[590px] bg-[#F1F5F9] h-[580px] rounded-[100px]  relative overflow-hidden">
          <div className="relative text-center mt-6">
            <img
              src={c4}
              alt="Decorative background"
              className="absolute left-1/2 top-0 -translate-x-1/2 w-64 opacity-20 pointer-events-none -z-10"
            />

            <div className="relative inline-block mx-auto">
              <img
                src={c4}
                alt="Title background"
                className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none -z-10"
              />
              <h2 className="relative text-4xl font-semibold text-[#0B5A39]">
                Jobs N Visa GP Recruitment Solutions
              </h2>

              <p className="relative text-[#36A96B] mt-3 text-lg">
                Designed to support Australian clinics with hiring
              </p>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative h-[430px]">
            <img
              src={c4}
              alt="GP Recruitment Solutions"
              className="absolute inset-x-0 top-10 mx-auto w-full max-w-[1440px] h-auto"
            />

            {steps.map((item, index) => {
              const Icon = item.icon;

              const textAlignClass =
                item.align === "left"
                  ? "text-left"
                  : item.align === "right"
                    ? "text-right"
                    : "text-center";

              const itemsAlignClass =
                item.align === "left"
                  ? "items-start"
                  : item.align === "right"
                    ? "items-end"
                    : "items-center";

              return (
                <div
                  key={index}
                  className="absolute z-20"
                  style={{
                    top: item.top,
                    left: item.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className={`relative flex flex-col ${itemsAlignClass}`}>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg border border-green-100 flex items-center justify-center">
                      <Icon className="text-[#0B7A45]" size={24} />
                    </div>

                    {item.position === "bottom" && (
                      <div
                        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[250px] ${textAlignClass}`}
                      >
                        <div className="relative flex flex-col items-center">
                          {/* Background Image */}
                          <img
                            src={item.image}
                            alt=""
                            className="absolute w-[30px] h-[90px] top-[-20px] left-[90px] -translate-x-1/2 w-[180px] opacity-100 pointer-events-none"
                          />

                          <h3 className="relative z-10 font-bold text-[#0B5A39] mb-2">
                            {item.title}
                          </h3>

                          <ul className="relative z-10 text-[15px] font-semibold text-green-600 space-y-1">
                            {item.points.map((point) => (
                              <li key={point}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {/* Top */}
                    {item.position === "top" && (
                      <div
                        className={`absolute bottom-24 left-1/2 -translate-x-1/2 w-[250px] ${textAlignClass}`}
                      >
                        <div className="relative flex flex-col items-center">
                          {/* Background Image */}
                          <img
                            src={item.image}
                            alt=""
                            className="absolute w-[30px] h-[90px] top-[60px] left-[85px] -translate-x-1/2 w-[180px] opacity-100 pointer-events-none"
                          />

                          <h3 className="relative z-10 font-bold text-[#0B5A39] mb-2">
                            {item.title}
                          </h3>

                          <ul className="relative z-10 text-[15px] font-semibold text-green-600 space-y-1">
                            {item.points.map((point) => (
                              <li key={point}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Left */}
                    {item.position === "left" && (
                      <div
                        className={`absolute right-16 top-1/2 -translate-y-1/2 w-[220px] ${textAlignClass}`}
                      >
                        <h3 className="font-semibold text-[#0B5A39] mb-2">
                          {item.title}
                        </h3>

                        <ul className="text-sm text-green-600 space-y-1">
                          {item.points.map((point) => (
                            <li key={point}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Right */}
                    {item.position === "right" && (
                      <div
                        className={`absolute left-16 top-1/2 -translate-y-1/2 w-[220px] ${textAlignClass}`}
                      >
                        <h3 className="font-semibold text-[#0B5A39] mb-2">
                          {item.title}
                        </h3>

                        <ul className="text-sm text-green-600 space-y-1">
                          {item.points.map((point) => (
                            <li key={point}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isOddItem = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={
                    isOddItem ? "flex flex-col items-center" : "flex gap-5"
                  }
                >
                  {isOddItem && (
                    <div className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center">
                      <Icon size={20} className="text-[#0B7A45]" />
                    </div>
                  )}

                  <div
                    className={`pb-8 ${isOddItem ? "mt-4 text-center" : ""}`}
                  >
                    {!isOddItem && (
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white shadow border flex items-center justify-center">
                          <Icon size={20} className="text-[#0B7A45]" />
                        </div>
                      </div>
                    )}
                    <h3 className="font-bold text-[#0B5A39] mb-2">
                      {item.title}
                    </h3>

                    <ul className="text-[16px] font-semibold text-gray-600 space-y-1">
                      {item.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
