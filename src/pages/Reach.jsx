import { reach } from "../utils/constants";

const Reach = () => {
 return (
  <div className="bg-[#002A3B] flex justify-center items-center p-10">
   {reach?.map((item, index) => (
    <div
     key={index}
     className={`flex flex-1 justify-center items-center gap-4 text-white ${
      reach.length - 1 !== index && `border-r border-white`
     }`}>
     <div>
      <img src={item?.icon} alt={item?.title} />
     </div>
     <div className="flex flex-col">
      <p className="font-semibold text-xl">{item?.title}</p>
      <p>{item?.description}</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default Reach;
