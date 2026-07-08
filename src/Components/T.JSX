  {/* Cards */}
          <div
            className="relative w-full max-w-[1440px] h-[520px] rounded-[100px] mt-10 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg,#038E44B2,#038E44B2),url(${g2})`,
            }}
          >
            <div className="text-center pt-12">
              <p className="text-[32px] font-semibold text-white">
                Smarter GP Hiring Starts Here
              </p>

              <p className="mt-4 text-[22px] text-green-100">
                End-to-End Recruitment Service with Migration Support
              </p>
            </div>

            <div className="relative w-full h-[320px] mt-8">
              {cards.map((card, index) => {
                const position = getPosition(index);

                let classes;

                if (position === "left") {
                  classes =
                    "left-[140px] top-10 w-[300px] h-[200px] scale-95 z-10";
                } else if (position === "center") {
                  classes =
                    "left-1/2 -translate-x-1/2 top-0 w-[400px] h-[270px] scale-100 z-20";
                } else {
                  classes =
                    "right-[140px] top-10 w-[300px] h-[200px] scale-95 z-10";
                }

                return (
                  <div
                    key={card.title}
                    onClick={() => handleClick(index)}
                    className={`absolute rounded-[40px] bg-white cursor-pointer transition-all duration-700 ease-in-out flex flex-col items-center ${classes}`}
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className={`w-10 h-10 ${
                        position === "center" ? "mt-12" : "mt-9"
                      }`}
                    />

                    <p className="mt-8 text-[18px] font-medium text-green-700 text-center px-5">
                      {card.title}
                    </p>

                    {position === "center" && (
                      <p className="w-[250px] mt-4 text-center text-green-950">
                        {card.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

            const cards = [
              {
                icon: c1,
                title: "DPA & Regional Focus",
                description:
                  "We provide specialized support for all your GP hiring needs.",
              },
              {
                icon: c3,
                title: "Global GP Talent",
                description:
                  "Hire skilled General Practitioners from UK, Ireland, Canada, New Zealand.",
              },
              {
                icon: c2,
                title: "Fully Compliant",
                description:
                  "We provide specialized support for all your GP hiring needs.",
              },
            ];
          
            // 0 = first card center, 1 = second card center, 2 = third card center
            const [centerIndex, setCenterIndex] = useState(1);
          
            const handleClick = (clickedIndex) => {
              setCenterIndex(clickedIndex);
            };
          
            const getPosition = (index) => {
              if (index === centerIndex) return "center";
          
              if (
                (centerIndex === 0 && index === 2) ||
                (centerIndex === 1 && index === 0) ||
                (centerIndex === 2 && index === 1)
              ) {
                return "left";
              }
          
              return "right";
            };
          