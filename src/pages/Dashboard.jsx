// import React, { useContext } from 'react';
// import { HackathonContext } from '../context/HackathonContext';
// import HackathonCard from '../components/HackathonCard';

import Banner from "./Banner";
import Features from "./Features";
import Hackathons from "./Hackathons";
import Header from "./Header";
import Reach from "./Reach";

function Dashboard() {
 // const { hackathons } = useContext(HackathonContext);

 return (
  <>
   <Header />
   <Banner />
   <Reach />
   <Features />
   <Hackathons />
  </>
 );
}

export default Dashboard;
