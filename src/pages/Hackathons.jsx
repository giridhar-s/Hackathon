import { useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import {
 getButtonStyles,
 getDateStatus,
 getTimeStatus,
} from "../utils/constants";
import CharmCircleTick from "../assets/icons/CharmCircleTick.svg";
import { Link } from "react-router-dom";
import { useHackathonContext } from "../context/HackathonContext";
import CountdownTimer from "../utils/CountdownTimer";
import Dropdown from "../utils/Dropdown";

const Hackathons = () => {
 const { hackathons } = useHackathonContext();
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedFilters, setSelectedFilters] = useState([]);

 const filteredHackathons = hackathons?.filter((item) => {
  const matchesSearch = item.title
   .toLowerCase()
   .includes(searchTerm.toLowerCase());
  const matchesFilter =
   selectedFilters.length === 0 ||
   selectedFilters.includes(getDateStatus(item.startDate, item.endDate));

  return matchesSearch && matchesFilter;
 });

 const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
 };

 const handleFilterChange = (newFilters) => {
  setSelectedFilters(newFilters);
 };

 return (
  <div>
   <div className="py-8 sm:py-16 bg-[#002A3B]">
    <h2 className="text-white font-semibold text-2xl text-center mb-12">
     Explore Challenges
    </h2>
    <div className="flex gap-6 justify-center items-center">
     <div className="rounded-3xl p-4 w-[50vw] h-[8vh] bg-white flex">
      <img src={SearchIcon} alt="search-icon" />
      <input
       type="search"
       value={searchTerm}
       onChange={handleSearchChange}
       className="border-none outline-none w-full ml-2"
       placeholder="Search challenges"
      />
     </div>
     <Dropdown onFilterChange={handleFilterChange} />
    </div>
   </div>
   <div className="bg-[#003145] px-4 py-8 md:px-12 lg:px-24 pb-16 flex flex-wrap gap-6 mx-auto">
    {filteredHackathons?.map((item, index) => {
     const dateStatus = getDateStatus(item?.startDate, item?.endDate);
     const buttonStyles = getButtonStyles(dateStatus);
     return (
      <div
       key={index}
       className="bg-white rounded-3xl space-y-4 w-[100%] sm:w-[40%] md:w-[30%] mx-auto flex flex-col">
       <img
        src={item?.imageUrl}
        alt="hackathon-card"
        className="w-full object-cover h-[180px] rounded-t-2xl"
       />
       <div className="flex flex-col justify-between space-y-5 text-center pb-6">
        <div className="space-y-3">
         <button
          className={`${buttonStyles} py-1 px-3 text-[12px] font-semibold rounded-md`}>
          {dateStatus}
         </button>
         <p className="text-lg font-semibold px-6 mb-4">{item?.title}</p>
         <p className="text-[#444444]">{getTimeStatus(dateStatus)}</p>
         <p className="text-xl text-[#444444]">
          <CountdownTimer startDate={item?.startDate} endDate={item?.endDate} />
         </p>
        </div>
        <div className="">
         <Link to={`/hackathon/${item?.id}`}>
          <button className="bg-[#44924C] text-white mx-auto rounded-md py-2 px-4 font-medium gap-2 flex items-center">
           <img src={CharmCircleTick} alt="CharmCircleTick" />
           Participate Now
          </button>
         </Link>
        </div>
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default Hackathons;
