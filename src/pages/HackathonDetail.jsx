import Header from "./Header";
import Timing from "../assets/icons/Timing.svg";
import CarbonSkillLevelBasic from "../assets/icons/CarbonSkillLevelBasic.svg";
import { useEffect, useState } from "react";
import { useHackathonContext } from "../context/HackathonContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const HackathonDetail = () => {
 const { id } = useParams();
 const navigate = useNavigate();
 const [hackathonDetail, setHackathonDetail] = useState(null);

 const { hackathons, deleteHackathon } = useHackathonContext();

 useEffect(() => {
  if (hackathons.length > 0) {
   const data = hackathons.find((item) => item.id === parseInt(id, 10));
   setHackathonDetail(data);
  }
 }, [hackathons, id]);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <>
   <Header />
   {hackathonDetail ? (
    <>
     <div className="bg-[#003145] py-16 pl-5 sm:pl-10 md:pl-14 space-y-5 text-white">
      <div className="bg-[#FFCE5C] text-[#000000] inline-flex items-center gap-2 py-2 px-12 rounded-md">
       <div className="border border-black rounded-full p-1">
        <img src={Timing} alt="Timing" className="w-2 h-2" />
       </div>
       <p className="font-medium text-[14px]">{hackathonDetail.startDate}</p>
      </div>
      <h1 className="text-[3vw] font-bold">{hackathonDetail.title}</h1>
      <p className="text-lg">
       Identify the class to which each butterfly belongs to
      </p>
      <button className="bg-[#FFFFFF] text-[#003145] inline-flex items-center gap-2 py-2 px-6 mt-16 rounded-md">
       <img src={CarbonSkillLevelBasic} alt="Skill Level" className="w-4 h-4" />
       <p className="font-medium text-[14px]">{hackathonDetail.level}</p>
      </button>
     </div>
     <div className="flex justify-between px-6 sm:px-16 shadow-lg h-[12vh]">
      <div className="border-b-4 border-[#44924C] h-full flex flex-col justify-center">
       <button className="px-6 font-medium">Overview</button>
      </div>
      <div className="flex items-center gap-4">
       <Link to={`/update/${hackathonDetail?.id}`}>
        <button className="bg-[#44924C] text-white mx-auto rounded-md py-2 px-4 text-[14px] font-medium gap-2 flex items-center">
         Edit
        </button>
       </Link>
       <button
        className="bg-[#FFFFFF] text-[#DC1414] border border-[#DC1414] mx-auto rounded-md py-2 px-4 text-[14px] font-medium gap-2 flex items-center"
        onClick={() => {
         deleteHackathon(hackathonDetail?.id);
         navigate("/");
        }}>
        Delete
       </button>
      </div>
     </div>
     <div className="p-10 md:p-16">
      <p className="text-[#444444] leading-8 text-lg">
       {hackathonDetail.description}
      </p>
     </div>
    </>
   ) : (
    <div className="flex justify-center items-center">
     <h1>No Data Found!</h1>
    </div>
   )}
  </>
 );
};

export default HackathonDetail;
