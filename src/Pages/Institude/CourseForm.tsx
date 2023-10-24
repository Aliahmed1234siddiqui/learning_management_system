import React, { useEffect } from 'react'
import AInput from '../../Components/INPUT/AInput'
import{useState} from 'react'
import AButton from '../../Components/BUTTON/AButton';
import { useNavigate } from 'react-router-dom';
import { fbAdd, fbGet } from '../../config/Firbase/FirebaseMethod';
import ASelect from '../../Components/SELECT/ASelect';

export default function CourseForm() {
  const[course , setCourse] = useState<any>();
  const[teacher, setTeacher] = useState<any>();
  const navigate = useNavigate();
  const[equal, setequal] = useState<any>([]);
  let arr:any = [] ;
  let get= ()=>{
    fbGet( "users/teacher").then((res:any)=>{
console.log(res);

for(let i= 0 ; i< res.length ;i++){
  setTeacher(arr.push(res[i].teacherName))
  setTeacher(arr)
}
}
    
  )}
console.log(equal);
  let add = ()=>{
    fbAdd(course , "courses").then(res=>{
      alert("course add successfully");
      navigate('../CourseList')
    }).catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
 get();

  },[])
  return (
    <div>
    <h1>Course Form</h1>
      <AInput type='text' label='Course Name' change={(e:any)=>{setCourse({...course ,cName:e.target.value})}}/>
      
       
      
      <ASelect change={(e:any)=>{setCourse({...course ,teacher:e.target.value})}} label='Teachers' option={teacher}/>
      <AInput type='text' label='Duration' change={(e:any)=>{setCourse({...course ,duration:e.target.value})}}/>
      <AInput type='text' label='Course Fees' change={(e:any)=>{setCourse({...course ,cFees:e.target.value})}}/>
<AButton label='ADD COURSE' clicked={add}/>
    </div>
  )
}
