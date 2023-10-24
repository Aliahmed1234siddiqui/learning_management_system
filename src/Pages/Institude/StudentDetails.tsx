import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fbGet, fbGet2 } from '../../config/Firbase/FirebaseMethod';

export default function StudentDetails(a:any) {
  const[details , setDetails] = useState<any>([])
  const params = useParams();
  console.log(params);
  let getStudentD = ()=>{
  fbGet2(`users/student/${params.id}`).then((res:any)=>{
    setDetails(res);
    console.log(details)
  }).catch(err=>{
    console.log(err);
  })
  }
  useEffect(()=>{
    getStudentD();
  },[])
  return (
    <div>
      <div style={{display:"flex", alignItems:"center"}} className="row"> 
      <div className="col-md-6 col-sm-12 text-center">
      <h3>Name : {details.sName}</h3>
      <h3>Father Name : {details.fName}</h3>

      </div>
      <div className="col-md-6 col-sm-12 text-center">
  
      <h1> <img src={details.logo} style={{width:"150px", height:"150px"}} alt="" /></h1>

      </div>
      </div>
      
     <table  border={3}  className='table table-striped'>
      
      <tr>
        <th>Address</th>
        <td>{details.address}</td>
      </tr>
      <tr>
        <th>City </th>
        <td>{details.city}</td>
      </tr> <tr>
        <th>Contact </th>
        <td>{details.contact}</td>
      </tr> <tr>
        <th>Country </th>
        <td>{details.country}</td>
      </tr> <tr>
        <th>Course </th>
        <td>{details.course}</td>
      </tr> <tr>
        <th>Email </th>
        <td>{details.email}</td>
      </tr> <tr>
        <th>Gender </th>
        <td>{details.gender}</td>
      </tr> <tr>
        <th>Institude </th>
        <td>{details.institude}</td>
      </tr>
      <tr>
        <th>LAst Qualification </th>
        <td>{details.lastQ}</td>
      </tr>
      <tr>
        <th>Section </th>
        <td>{details.section}</td>
      </tr>
      </table> 





   
    
    </div>
  )
}
