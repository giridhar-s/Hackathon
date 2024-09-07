import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hackathons as initialHackathons } from "../utils/constants";

const HackathonContext = createContext();

export const HackathonProvider = ({ children }) => {
 const [hackathons, setHackathons] = useState(() => {
  const storedHackathons = localStorage.getItem("hackathons");
  return storedHackathons ? JSON.parse(storedHackathons) : initialHackathons;
 });

 useEffect(() => {
  localStorage.setItem("hackathons", JSON.stringify(hackathons));
 }, [hackathons]);

 const createHackathon = (hackathon) => {
  setHackathons((prevHackathons) => [...prevHackathons, hackathon]);
 };

 const updateHackathon = (id, updatedHackathon) => {
  console.log("id", id);
  console.log("updatedHackathon", updatedHackathon);

  setHackathons((prevHackathons) => {
   const updated = prevHackathons.map((hackathon) =>
    hackathon.id === id ? { ...hackathon, ...updatedHackathon } : hackathon
   );
   console.log("updated hackathons", updated); // Log the updated hackathons list
   return updated;
  });
 };

 const deleteHackathon = (id) => {
  setHackathons((prevHackathons) =>
   prevHackathons.filter((hackathon) => hackathon.id !== id)
  );
 };

 return (
  <HackathonContext.Provider
   value={{ hackathons, createHackathon, updateHackathon, deleteHackathon }}>
   {children}
  </HackathonContext.Provider>
 );
};

HackathonProvider.propTypes = {
 children: PropTypes.node.isRequired,
};

export const useHackathonContext = () => {
 return useContext(HackathonContext);
};
