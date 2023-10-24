import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { fbSignup} from '../config/Firbase/FirebaseMethod'
import ASelect from '../Components/SELECT/ASelect';
import ADate from '../Components/DATE PICKER/ADate';





export default function Signup() {
    const[model , setModel] = useState<any>({ })
      
      
const navigate = useNavigate();      

let signup= ()=>{
       model.role = "student"

  fbSignup(model, "users",).then((res)=>{
navigate('../Login');
      }).catch(err=>{
        alert(err);
      })
  }
      
  return (
    <div>




      <div className="main" >
   <div className="sub  text-center  "  >
   <h1 className='text-white bg-black py-2 text-center'>REGISTRATION FORM</h1>

  
   <TextField className="m-3" onChange={(e)=>{setModel({ ...model , name:e.target.value,})}} label="Name" type='text'  variant='standard' ></TextField>
  
<TextField className="m-3" onChange={(e)=>{setModel({...model , fatherName:e.target.value} )}} label="Father Name" type='text'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , contact:e.target.value,})}} label="Contact" type='text'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , Cnic:e.target.value,})}} label="CNIC NUMBER" type='text'  variant='standard' ></TextField>
<ASelect option={["UNDER MATRIC", "MATRIC","INTERMEDIATE","GRADUATE","UNDER GRADUATE"]} change={(e:any)=>{setModel({ ...model , lastQ:e.target.value,})}} label="LAST QUALIFICATION"  />
<TextField className="m-3 " onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>
<ADate change={(e:any)=>{setModel({ ...model , dataOfBirth:e.target.value,})}}/>
<TextField className="m-3" onChange={(e)=>{setModel({...model , address:e.target.value} )}} label="ADDRESS" type='text'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , country:e.target.value,})}} label="COUNTRY" type='text'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , city:e.target.value,})}} label="CITY" type='text'  variant='standard' ></TextField>

</div>
      <br />  <Button variant="contained" onClick={signup}>REGISTOR NOW</Button>

     
        </div>

   </div>
  )
}
