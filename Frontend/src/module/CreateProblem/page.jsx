import React from 'react';

import TopBar from '../../component/Topbar';
//import Submit from './component/Submit';
//import './MyApp.css'

//import Problemform from './component/Problemform';
//import CustomCard from './component/CustomCard';
//import CustomCard from '../../component/CustomCard';
import Problemform from '../../component/Problemform';
import AddTestcase from '../../component/AddTestcase';

import { Button } from '@mui/material';
import CreatePBButton from '../../component/CreatePBButton';



function CreateProblem() {
  return (
    <>

    <TopBar></TopBar>
    <Problemform></Problemform>
    <AddTestcase></AddTestcase>
    <CreatePBButton></CreatePBButton>
    </>
    
  )
};

export default CreateProblem;
