import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AButton from '../../Components/BUTTON/AButton';
import ATable from '../../Components/TABLE/ATable';
import { fbGet } from '../../config/Firbase/FirebaseMethod';
import StudentDetails from './StudentDetails';
import ABTable from '../../Components/TABLE/ATable copy';

export default function TeacherList() {
  const [student , setStudent] = useState<any>([]);
  const navigate = useNavigate();
  let get=()=>{
fbGet("users/teacher").then(res=>{
  
  setStudent(res)
}).catch(err=>{
  console.log(err);
})
  }
  useEffect(()=>{get()},[])
  return (
    <div>
        <AButton clicked={()=>{
        navigate('../TeacherForm')
        }} label='Add Teacher'/>
      <ABTable
      node="TeacherDetails"
      data={student} cols={[
        {
          display:"Teacher Name",
          key:"teacherName",
        },
        {
          display:"Specialization",
          key:"special",
        },
        {
          display:"Teaching Exprience",
          key:"TE",
        },
      ]}/> 
    </div>
  )
}



