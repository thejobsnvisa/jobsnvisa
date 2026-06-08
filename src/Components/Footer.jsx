import logo from "../assets/logo.svg";
import facebookIcon from "../assets/Facebook.svg";
import linkdinIcon from "../assets/Linkdin.svg";
import youtubeIcon from "../assets/Youtube.svg";
import instagramIcon from "../assets/Instagram.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/Location.svg";
import xIcon from "../assets/X.svg";
import { Link } from "react-router-dom";

const socialIcons = [
  { src: facebookIcon, alt: "facebook", href: "https://www.facebook.com" },
  { src: linkdinIcon, alt: "linkedin", href: "https://www.linkedin.com" },
  { src: youtubeIcon, alt: "youtube", href: "https://www.youtube.com" },
  { src: instagramIcon, alt: "instagram", href: "https://www.instagram.com" },
  { src: xIcon, alt: "x", href: "https://x.com" },
];

const Footer = () => {
  return (
    <div className="w-full rounded-tl-[80px] rounded-tr-[80px] bg-[#e4ffec] mt-10">
      <div className="max-w-[1440px] mx-auto px-10 py-16 ml-20">
        <div className="flex flex-wrap justify-between gap-6 ">
          <div className="max-w-[331px]">
            <img src={logo} alt="logo" className="w-[183px] h-[48px]" />
            <p className="mt-4 text-base text-black">
              Your gateway to career excellence in Australia
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8 ">
              {socialIcons.map(({ src, alt, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-[50px] w-[50px] rounded-[18px] border border-green-200 bg-green-200/70 flex items-center justify-center"
                >
                  <img src={src} alt={alt} className="h-[30px] w-[30px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-[180px]">
            <h3 className="text-[18px] font-bold text-green-700">Support</h3>
            <div className="mt-4 space-y-3 text-base text-green-900">
              <Link to="/help-center" className="block hover:underline">
                Help Center
              </Link>
              <Link to="/privacy-policy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:underline">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="block hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="min-w-[220px] mr-20">
            <h3 className="text-[18px] font-bold text-green-700">Contact Info</h3>
            <div className="mt-4 space-y-3 text-base text-green-900">
              <p className="flex items-center gap-2">
                <img src={phoneIcon} alt="phone" className="h-6 w-6" />
                <span>+61 3 8764 3335</span>
              </p>
              <p className="flex items-center gap-2">
                <img src={emailIcon} alt="email" className="h-6 w-6" />
                <span>info@jobsnvisa.com.au</span>
              </p>
              <p className="flex items-center gap-2">
                <img src={locationIcon} alt="location" className="h-6 w-6" />
                <span>Sydney, Melbourne, Brisbane</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-200 pt-8 pb-4 text-center text-base text-gray-500 w-full">
          © 2026 JobsNVisa. All rights reserved.
          <br />
          Licensed Migration Agent | Registered Employment Services
        </div>
      </div>
    </div>
  );
};

export default Footer;
