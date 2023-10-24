import React from 'react'
import AInput from '../../Components/INPUT/AInput'
import AButton from '../../Components/BUTTON/AButton'
import {useState} from 'react'
import ASelect from '../../Components/SELECT/ASelect';
import ADate from '../../Components/DATE PICKER/ADate';
import { fbAdd, fbSignup } from '../../config/Firbase/FirebaseMethod';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentForm() {
  const[student , setStudent]= useState<any>();
  let navigate= useNavigate();
  let params = useParams();
  console.log(params.id);

  let add= ()=>{
    student.role = "student";

fbSignup(student ,`users/student`,).then(res=>{
  alert("student addd sucessfully")
  navigate("../StudentList");
}).catch(err=>{
  console.log(err);
})
  }
  return (
    <div>
   


    <h1>Student Form</h1>
    <div className="row">
<div  className="col-md-3 col-sm-12"><AInput type='text' label='sName' change={(e:any)=>{setStudent({...student ,sName:e.target.value})}}/>
</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='fName' change={(e:any)=>{setStudent({...student ,fName:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Student Pictur URL' change={(e:any)=>{setStudent({...student ,logo:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='number' label='contact' change={(e:any)=>{setStudent({...student ,contact:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='number' label='CNIC' change={(e:any)=>{setStudent({...student ,cnic:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={[ "MALE" , "FEMALE"]} label='Gender' change={(e:any)=>{setStudent({...student ,gender:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={["under Matric", "matric , intermedaite","under Graduate" ,"Graduate"]} label='Last Qualification' change={(e:any)=>{setStudent({...student ,lastQ:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={["frontend", "backend" , "web development","designing" ,"hacking"]} label='Courses' change={(e:any)=>{setStudent({...student ,course:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={["jawan pakistan"]} label='Isntitude' change={(e:any)=>{setStudent({...student ,institude:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={["MONDAY", "TUESDAY" , "WEDNESDAY","THRUSDAY" ,"FRIDAY" ,"SATURDAY","SUNDAY"]} label='Section' change={(e:any)=>{setStudent({...student ,section:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='email' label='Email' change={(e:any)=>{setStudent({...student ,email:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ADate  change={(e:any)=>{setStudent({...student ,birth:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='password' label='Password' change={(e:any)=>{setStudent({...student ,password:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='City' change={(e:any)=>{setStudent({...student ,city:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Country' change={(e:any)=>{setStudent({...student ,country:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Address' change={(e:any)=>{setStudent({...student ,address:e.target.value})}}/>


</div>
    </div>



<AButton label='ADD Student' clicked={add}/>
    </div>
  )
}
