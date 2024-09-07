import Group1000002515 from "../assets/icons/Group1000002515.svg";
import Group1000002516 from "../assets/icons/Group1000002516.svg";
import Group1000002518 from "../assets/icons/Group1000002518.svg";
import IdentificationCard from "../assets/icons/IdentificationCard.svg";
import Robot from "../assets/icons/Robot.svg";
import Vector from "../assets/icons/Vector.svg";
import CarbonNotebookReference from "../assets/icons/CarbonNotebookReference.svg";

export const reach = [
 {
  id: 1,
  title: "100k+",
  description: "AI model submissions",
  icon: Group1000002515,
 },
 {
  id: 2,
  title: "50k+",
  description: "Data Scientists",
  icon: Group1000002516,
 },
 {
  id: 3,
  title: "100k+",
  description: "AI Challenges hosted",
  icon: Group1000002518,
 },
];

export const features = [
 {
  id: 1,
  title: "Prove your skills",
  description:
   "Gain substantial experience by solving real world problems and pit against others to come up with innovative solutions.",
  icon: CarbonNotebookReference,
 },
 {
  id: 2,
  title: "Learn from community",
  description:
   "One can look and analyze the solutions submitted by the other data scientists in the community and learn from them.",
  icon: Vector,
 },
 {
  id: 3,
  title: "Challenge yourself",
  description:
   "There is nothing for you to loose by participating in a challenge. You can fail safe, learn out the entire experience and bounce back harder.",
  icon: Robot,
 },
 {
  id: 1,
  title: "Earn recognition",
  description:
   "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  icon: IdentificationCard,
 },
];

export const hackathons = [
 {
  id: 1,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730130/hackathon/Card1_umgu1p.png`,
  status: "Upcoming",
  title: "Data Sprint 72 - Butterfly Identification",
  startDate: "2024-12-01T00:00:00",
  endDate: "2024-12-31T23:59:59",
  level: "easy",
  description: "description1",
 },
 {
  id: 2,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730143/hackathon/Card2_lhu2hv.png`,
  status: "Active",
  title: "Data Sprint 71 - Weather Recongnition",
  startDate: "2024-09-01T00:00:00",
  endDate: "2024-09-30T23:59:59",
  level: "medium",
  description: "description2",
 },
 {
  id: 3,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730180/hackathon/Card3_k33kea.png`,
  status: "Upcoming",
  title: "Data Science Bootcamp-Graded Datathon",
  startDate: "2024-11-01T00:00:00",
  endDate: "2024-11-30T23:59:59",
  level: "hard",
  description: "description3",
 },
 {
  id: 4,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730181/hackathon/Card4_tkblkn.png`,
  status: "Active",
  title: "Data Sprint 70 Airline Passenger Satisfaction",
  startDate: "2024-08-01T00:00:00",
  endDate: "2024-08-31T23:59:59",
  level: "medium",
  description: "description4",
 },
 {
  id: 5,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730180/hackathon/Card5_hetgk7.png`,
  status: "Past",
  title: "Engineering Gradutates Employment Outcomes",
  startDate: "2023-05-01T00:00:00",
  endDate: "2023-05-31T23:59:59",
  level: "hard",
  description: "description5",
 },
 {
  id: 6,
  imageUrl: `https://res.cloudinary.com/dgewyv0pn/image/upload/v1725730181/hackathon/Card6_fkduyn.png`,
  status: "Past",
  title: "Travel Insurance Claim Prediction",
  startDate: "2022-10-01T00:00:00",
  endDate: "2022-10-31T23:59:59",
  level: "medium",
  description: "description6",
 },
];

export const getButtonStyles = (status) => {
 const statusStyles = {
  Upcoming: "bg-[#fcf1d2] text-[#666666]",
  Active: "bg-[#d2e5d4] text-[#44924c]",
  Past: "bg-[#ffded4] text-[#666666]",
 };

 return statusStyles[status] || "bg-[#defaultBackground] text-[#defaultText]";
};

export const getTimeStatus = (status) => {
 if (status === "Upcoming") {
  return "Starts in";
 } else if (status === "Active") {
  return "Ends in";
 } else {
  return "Ended on";
 }
};

export const getDateStatus = (startDateStr, endDateStr) => {
 const now = new Date();
 const startDate = new Date(startDateStr);
 const endDate = new Date(endDateStr);

 if (now > endDate) {
  return "Past";
 } else if (now >= startDate && now <= endDate) {
  return "Active";
 } else if (now < startDate) {
  return "Upcoming";
 }
};
