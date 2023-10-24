import React from 'react'
import AInput from '../../Components/INPUT/AInput'
import AButton from '../../Components/BUTTON/AButton'
import {useState} from 'react'
import ASelect from '../../Components/SELECT/ASelect';
import ADate from '../../Components/DATE PICKER/ADate';
import { fbAdd, fbSignup } from '../../config/Firbase/FirebaseMethod';
import { useNavigate } from 'react-router-dom';

export default function TeacherForms() {
  const[teacher , setteacher]= useState<any>();
  let navigate= useNavigate();
  let add= ()=>{
    teacher.role = "teacher";

fbSignup(teacher ,"users/teacher",).then(res=>{
  alert("teacher addd sucessfully")
  navigate("../teacherList");
}).catch(err=>{
  console.log(err);
})
  }
  return (
    <div>
      

    <h1>teacher Form</h1>
    <div className="row">
<div  className="col-md-3 col-sm-12"><AInput type='text' label='Teacher Name' change={(e:any)=>{setteacher({...teacher ,teacherName:e.target.value})}}/>
</div>
<div  className="col-md-3 col-sm-12">
<AInput type='number' label='Age' change={(e:any)=>{setteacher({...teacher ,age:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Teaching Experience' change={(e:any)=>{setteacher({...teacher ,TE:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='specialization' change={(e:any)=>{setteacher({...teacher ,special:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Image URL' change={(e:any)=>{setteacher({...teacher ,logo:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='number' label='contact' change={(e:any)=>{setteacher({...teacher ,contact:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='number' label='CNIC' change={(e:any)=>{setteacher({...teacher ,cnic:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={[ "MALE" , "FEMALE"]} label='Gender' change={(e:any)=>{setteacher({...teacher ,gender:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ASelect option={["Graduate","Master","PHD"]} label='Qualification' change={(e:any)=>{setteacher({...teacher ,lastQ:e.target.value})}}/>

</div>

<div  className="col-md-3 col-sm-12">
<AInput type='email' label='Email' change={(e:any)=>{setteacher({...teacher ,email:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<ADate  change={(e:any)=>{setteacher({...teacher ,birth:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='password' label='Password' change={(e:any)=>{setteacher({...teacher ,password:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='City' change={(e:any)=>{setteacher({...teacher ,city:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Country' change={(e:any)=>{setteacher({...teacher ,country:e.target.value})}}/>

</div>
<div  className="col-md-3 col-sm-12">
<AInput type='text' label='Address' change={(e:any)=>{setteacher({...teacher ,address:e.target.value})}}/>


</div>
    </div>



<AButton label='ADD Teacher' clicked={add}/>
    </div>
  )
}


