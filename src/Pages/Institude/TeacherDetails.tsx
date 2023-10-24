import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fbGet, fbGet2 } from '../../config/Firbase/FirebaseMethod';

export default function TeacherDetails() {
    const[details , setDetails] = useState<any>([])
    const params = useParams();
  
    let getStudentD = ()=>{
    fbGet2(`users/teacher/${params.id}`).then(res=>{
    console.log(res);

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
      <h3>Name : {details.teacherName}</h3>
      <h3>Age : {details.age}</h3>

      </div>
      <div className="col-md-6 col-sm-12 text-center">
  
      <h1> <img src={details.logo} style={{width:"150px", height:"150px"}} alt="" /></h1>

      </div>
      </div>
      
     <table  border={3}  className='table table-striped'>
      
      <tr>
        <th>Expirence </th>
        <td>{details.TE}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td>{details.address}</td>
      </tr> <tr>
        <th>Age </th>
        <td>{details.age}</td>
      </tr> <tr>
        <th>Date Of Birth </th>
        <td>{details.birth}</td>
      </tr> <tr>
        <th>City </th>
        <td>{details.city}</td>
      </tr> <tr>
        <th>Cnic </th>
        <td>{details.cnic}</td>
      </tr> <tr>
        <th>Contact </th>
        <td>{details.contact}</td>
      </tr> <tr>
        <th>Country</th>
        <td>{details.country}</td>
      </tr> <tr>
        <th>Email</th>
        <td>{details.email}</td>
      </tr>
      <tr>
        <th>Gender </th>
        <td>{details.gender}</td>
      </tr>
      <tr>
        <th>Qualification</th>
        <td>{details.lastQ}</td>
      </tr>
    
      <tr>

        <th>Specialization </th>
        <td>{details.special}</td>
      </tr>
     
      </table> 




    </div>
  )
}
