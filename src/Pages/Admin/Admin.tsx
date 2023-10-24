import React from 'react'
import { TextField } from '@mui/material'
import AInput from '../../Components/INPUT/AInput'

import{useState} from 'react'
import ASelect from '../../Components/SELECT/ASelect'
import AButton from '../../Components/BUTTON/AButton'
import { useDispatch , useSelector } from 'react-redux'
import { add } from '../../config/Redux/Reducers/UserSlice'
import { fbAdd, fbSignup } from '../../config/Firbase/FirebaseMethod'
import { useNavigate } from 'react-router-dom'
export default function Admin() {
 const navigate = useNavigate();
  const [model , setModel] = useState<any>()
    // const dispatch = useDispatch();
    // const data = useSelector((state: any) => state.user);
    let submit = ()=>{ 
      setModel({...model})
    model.role = "institute"
      fbSignup(model,"users/institute",).then(res=>{
console.log(res);
navigate('../intList')
    }).catch(err=>{
      console.log(err);
    })

    }
  return (

    <div >
     
      <div className='p-3'>
        <h1>Institute Form:</h1>
      <div className="row" style={{display:"flex" , justifyContent:"space-evenly"}}>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , iName:e.target.value}) } label="INSTITUTE NAME"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , sName:e.target.value}) } label="INSTITUTE SHORT NAME"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , logo:e.target.value}) } label="LOGO URL"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="number" change={(e:any)=>setModel({...model , campuses:e.target.value}) } label="NO.OF CAMPUSES"/></div>
      </div>
      <div className="row " style={{display:"flex" , justifyContent:"space-evenly"}}>
      <div className='col-md-3 col-sm-12 mt-2'><TextField style={{width:"100%"}} type="text" multiline  onChange={(e:any)=>setModel({...model , campusesD:e.target.value}) } label="CAMPUSES DETAILS"/></div>
      <div className='col-md-3 col-sm-12 mt-2'> <TextField type="text" multiline onChange={(e:any)=>setModel({...model , location:e.target.value}) } label="LOACTION"/></div>
      <div className='col-md-3 col-sm-12 mt-2'> <TextField type="text" multiline   onChange={(e:any)=>setModel({...model , address:e.target.value}) } label="ADDRESS"/></div>
      </div>
    
      <div className="row text-center" style={{display:"flex" , justifyContent:"space-evenly"}}>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , contact:e.target.value}) } label="Contact"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , ownerC:e.target.value}) } label="OWNER CONTACT NO"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="text" change={(e:any)=>setModel({...model , email:e.target.value}) } label="OWNER EMAIL"/></div>
        <div className='col-md-3 col-sm-12 mt-2'><AInput type="password" change={(e:any)=>setModel({...model , password:e.target.value}) } label="OWNER password"/></div>
        
      </div>
      <div className="row " style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center"}}>
      <div className='col-md-3 col-sm-12 mt-2 '><ASelect option={["institute"]} change={(e:any)=>setModel({...model , userType:e.target.value}) } label="USER TYPE"/></div>
      <div className='col-md-6 col-12 mt-2'><ASelect option={[ "school" ,"college" ,"university","institute"]} change={(e:any)=>setModel({...model , userType:e.target.value}) } label="INSTITUDE TYPE"/></div>
     <div className='col-md-12 col-sm-12 mt-5 text-center'>   <AButton   clicked={submit} label='SUBMIT'/></div>
      </div>
     
      </div>
      </div>
  
  )
}
