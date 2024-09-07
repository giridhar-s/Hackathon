import { Link } from "react-router-dom";
import bannerImage from "../assets/images/bannerImage.png";

const Banner = () => {
 return (
  <div className="min-h-[88vh] w-full flex flex-col sm:flex-row  bg-[#003145] text-white px-[10vw]">
   <div className="w-full sm:w-[65%] p-4 order-2 sm:order-1 flex flex-col justify-center items-center">
    <div className="border-l-8 border-[#FFCE5C] font-bold text-[2.5rem] pl-[5vw]">
     Accelerate Innovation with Gloabal AI Challenges
    </div>
    <div className="pl-[5vw] mt-8">
     <p className="text-xl leading-8">
      AI Challenges at DPhi simulate real-world problems.It is a greate place to
      put your AI/Data Scienceskils to test on diverse datasets allowing you to
      foster learning through competitions.
     </p>
     <Link to={`/create`}>
      <button className="bg-[#fff] text-[#003145] px-6 py-3 rounded-lg font-medium mt-9 text-lg">
       Create Challenge
      </button>
     </Link>
    </div>
   </div>
   <div className="w-full sm:w-[35%] p-4 order-1 sm:order-2 flex justify-center items-center">
    <img src={bannerImage} alt="banner-image" />
   </div>
  </div>
 );
};

export default Banner;
