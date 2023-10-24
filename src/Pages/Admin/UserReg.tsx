import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { fbSignup} from '../../config/Firbase/FirebaseMethod'
import ASelect from '../../Components/SELECT/ASelect';
type useModel = {
  userName:string,
  email: string,
  password: string,
  Cnic : any,
  role:any,  
}




export default function UserReg() {
    const[model , setModel] = useState<useModel>({
      userName:"",
        email:"",
        password:"",
        Cnic:0,
        role:"",
        

      })
      
      
const navigate = useNavigate();      

let signup= ()=>{
       
  fbSignup(model,"users",).then((res)=>{
    alert("add successfully")
      }).catch(err=>{
        alert(err);
      })
  }
      
  return (
    <div>
      <div className="main" >
   
   <h1>USER REGISTRATION</h1>

   <div className="sub text-center">
   <TextField className="m-3" onChange={(e)=>{setModel({ ...model , userName:e.target.value,})}} label="USERNAME" type='text'  variant='standard' ></TextField>

<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , Cnic:e.target.value,})}} label="CNIC NUMBER" type='number'  variant='standard' ></TextField>
<ASelect label='User Type' change={(e:any)=>{setModel({...model , role: e.target.value})}}  option={["admin"]}/>
      <br />  <Button variant="contained" onClick={signup}>USER REGISTRATION</Button>

  
        </div>

   </div>
    </div>
 
  )
}
