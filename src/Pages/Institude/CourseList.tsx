import React from 'react'
import{useState,useEffect} from 'react'
import { fbGet } from '../../config/Firbase/FirebaseMethod';
import AButton from '../../Components/BUTTON/AButton';
import { useNavigate } from 'react-router-dom';
import ATable from '../../Components/TABLE/ATable';
export default function CourseList() {
const [course , setCourse] = useState<any>([]);
const navigate = useNavigate();
let get= ()=>{
fbGet("courses").then(res=>{
  console.log(res)
  setCourse(res);
}).catch(err=>{
  console.log(err);
})
}
useEffect(()=>{
  get();
},[])

  return (
    <div>
  <AButton label='ADD COURSE' clicked={()=>{navigate('../CourseForm')}}/>
      <ATable cols={[
        {

          display:"Course Name",
          key:"cName"
        },
        {
          display:"Course Fees",
          key:"cFees"
        },
        {
          display:"Teachers",
          key:"teacher"
        },
        {
          display:"Time Duration",
          key:"duration"
        },
      ]} data={course}/>
    </div> 
  )
}
