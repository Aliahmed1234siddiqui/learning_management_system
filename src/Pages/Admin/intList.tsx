import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fbGet } from '../../config/Firbase/FirebaseMethod'
import ATable from '../../Components/TABLE/ATable';
import AButton from '../../Components/BUTTON/AButton';
import { useNavigate } from 'react-router-dom';
import ABTable from '../../Components/TABLE/ATable copy';

export default function InstList() {
const[data, setData] = useState<any>([]);
const navigate =  useNavigate();
let getdata = ()=>{
  
  fbGet("users/institute").then((res:any)=>{
    console.log(res);
    setData(res)
      }).catch(err=>{
        console.log(err)
      })
}
useEffect(()=>{
  getdata();
},[]);
  return (
    <div>
  
      <AButton label='Add Institude' clicked={()=>{
        navigate('../Admin')
      }}/>
     <ABTable node="instDetails" data={data} cols={[
      {
display:"Institude Name",
key:"iName",
     },
     {
      display:"Logo",
      key:"logo",
           },
           {
            display:"No.of Campus",
            key:"campuses",
                 },
                 {
                  display:"NickNmae",
                  key:"sName",
                       },
     ]}/>
    </div>
  )
}
