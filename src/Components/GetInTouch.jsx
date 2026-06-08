import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/Location.svg";
import background from "../assets/background.jpg";

const GetInTouch = () => {
  return (
     <div className="w-full flex justify-center px-4 sm:px-6">
        <div
          className="relative w-full max-w-[1300px] min-h-[470px] rounded-tl-[80px] rounded-tr-[80px] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="absolute inset-0 bg-[#217444]/70" />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[470px] px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="mb-8 text-3xl sm:text-4xl font-normal text-center text-green-100">
              Get In Touch
            </h2>
            <div className="w-full max-w-[1138px] grid gap-6 md:grid-cols-3">
              <div className="bg-white/80 backdrop-blur-md rounded-[30px] relative w-full min-h-[220px] p-8 shadow-xl text-center">
                <div className="absolute -top-6 md:left-[10px] lg:left-[20px] -translate-x-1/2 h-[51px] w-[51px] bg-green-200 rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] p-[8px] flex items-center justify-center">
                  <img src={emailIcon} alt="email" />
                </div>
                <h3 className="text-xl text-orange-600 mb-3 mt-6">Email</h3>
                <p className="text-black font-semibold">
                  info@jobsnvisa.com.au
                </p>
                <p className="text-emerald-900 mt-2">
                  Response within 24 hours
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-[30px] relative w-full min-h-[220px] p-8 shadow-xl text-center">
                <div className="absolute -top-6 md:left-[10px] lg:left-[20px] -translate-x-1/2 h-[51px] w-[51px] bg-green-200 rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] p-[8px] flex items-center justify-center">
                  {" "}
                  <img src={phoneIcon} alt="phone" />
                </div>
                <h3 className="text-xl text-orange-600 mb-3 mt-6">Phone</h3>
                <p className="text-black font-semibold">+61 3 8764 3335</p>
                <p className="text-emerald-900 mt-2">
                  Monday – Friday 9:00 AM – 6:00 PM AEST
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-[30px] relative w-full min-h-[220px] p-8 shadow-xl text-center">
                <div className="absolute -top-6 md:left-[10px] lg:left-[20px] -translate-x-1/2 h-[51px] w-[51px] bg-green-200 rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] p-[8px] flex items-center justify-center">
                  <img src={locationIcon} alt="location" />
                </div>
                <h3 className="text-xl text-orange-600 mb-3 mt-6">Locations</h3>
                <p className="text-black font-semibold">
                  Sydney, Melbourne, Brisbane
                </p>
                <p className="text-emerald-900 mt-2">
                  Serving all of Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GetInTouch
