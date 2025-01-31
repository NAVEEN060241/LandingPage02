import mailIcon from "./assets/mail.svg";
import mapIcon from "./assets/map.svg";
import fbIcon from "./assets/fb.svg";
import twitterIcon from "./assets/twitter.svg";
import linkedinIcon from "./assets/linkedin.svg";
import instaIcon from "./assets/insta.svg";
import scheduleIcon from "./assets/schedule.svg";

export default function LandingPage() {
  return (
    <>
      {/* Contact Container aka First Row  */}
      <div className="flex justify-between px-20 py-4 text-gray-500 text-sm border border-e-gray-700">
        {/* Contact Left Section */}
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <img src={mailIcon} alt="Mail" width={24} />
            <p>info@company.com</p>
          </div>
          {/* Divider */}
          <span className="border border-e-gray-200"></span>
          <div className="flex gap-2 items-center">
            <img src={mapIcon} alt="Map" width={24} />
            <p>Sunny Isles Beach, FL 33160</p>
          </div>
        </div>

        {/* Contact Right Section */}
        <div className="flex gap-3">
          <img src={fbIcon} alt="FB" width={32} />
          <img src={twitterIcon} alt="Twitter" width={32} />
          <img src={linkedinIcon} alt="LinkedIn" width={32} />
          <img src={instaIcon} alt="Instagram" width={32} />
        </div>
      </div>
      {/* Navigation Container aka Second Row */}
      <div className="flex justify-between items-center py-5">
        <div className="ps-20">
          <h1 className="text-3xl font-extrabold tracking-widest">VILLA</h1>
        </div>
        <div className="pe-20">
          <ul className="list-none flex items-center gap-16">
            <li className="text-customOrange font-semibold">Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact Us</li>
            <li className="flex  relative">
              <img
                src={scheduleIcon}
                alt="Schedule"
                width={40}
                className="bg-customOrange rounded-full p-3 absolute"
              />
              <a href="#" className="bg-[#221823] text-white rounded-full py-2">
                <span className="ps-12 pe-5">Schedule a visit</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Landing Page Picture */}
      <div className="home relative bg-[url('./assets/home.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed w-full h-customHeight">
        {/* Text On Image */}
        <div className="absolute top-1/3 left-80 space-y-10">
          <h1 className="text-md bg-white inline p-2">
            Toronto, <span className="text-customOrange">Canada</span>
          </h1>
          <h1 className="text-6xl text-white line leading-customLh tracking-wider font-bold">
            HURRY! <br /> GET THE BEST <br /> VILLA FOR YOU
          </h1>
        </div>
      </div>
    </>
  );
}
