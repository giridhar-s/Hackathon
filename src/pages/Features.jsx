import { features } from "../utils/constants";

const Features = () => {
 return (
  <div className="py-8 sm:py-16">
   <h2 className="text-[2rem] font-medium text-center pb-8 sm:pb-16">
    Why Participate in <span className="text-[#44924C]">AI Challenges?</span>
   </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-[10vw]">
    {features.map((item, index) => (
     <div
      key={index}
      className="flex flex-col bg-[#F8F9FD] p-10 space-y-4 rounded-xl shadow-md">
      <img src={item.icon} alt={item.title} className="w-[3vw] h-[3vw]" />
      <p className="text-[1.5rem] font-semibold">{item.title}</p>
      <p className="text-[#64607D]">{item.description}</p>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Features;
