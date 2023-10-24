import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AButton from '../../Components/BUTTON/AButton';
import ATable from '../../Components/TABLE/ATable';
import { fbGet } from '../../config/Firbase/FirebaseMethod';
import StudentDetails from './StudentDetails';
import ABTable from '../../Components/TABLE/ATable copy';

export default function StudentList() {
  const [student , setStudent] = useState<any>([]);
  const navigate = useNavigate();
  let params = useParams();
  let get=()=>{
fbGet(`users/student`).then(res=>{
  console.log(res);
  setStudent(res)
}).catch(err=>{
  console.log(err);
})
  }
  useEffect(()=>{get()},[])
  return (
    <div>
      <AButton clicked={()=>{
        navigate('../StudentForm')
        }} label='Add Student'/>
      <ABTable
      node="StudentDetails"
      data={student} cols={[
        {
          display:"Student Name",
          key:"sName",
        },
        {
          display:"Father Name",
          key:"fName",
        },
        {
          display:"Course",
          key:"course",
        },
      ]}/> 
    </div>
  )
}
