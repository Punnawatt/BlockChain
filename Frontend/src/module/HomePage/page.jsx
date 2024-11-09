import React from 'react';

import TopBar from '../../component/Topbar';
//import Submit from './component/Submit';
//import './MyApp.css'

//import Problemform from './component/Problemform';
//import CustomCard from './component/CustomCard';
import CustomCard from '../../component/CustomCard';



function HomePage() {
  return (
    <>

    <TopBar></TopBar>
    <h3>Problem List</h3>
    <CustomCard></CustomCard>
    <CustomCard></CustomCard>
    <CustomCard></CustomCard>
    <CustomCard></CustomCard>
    </>
    
    
  )
};

export default HomePage;
