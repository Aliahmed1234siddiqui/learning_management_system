import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fbGet, fbGet2 } from '../../config/Firbase/FirebaseMethod';
export default function InstDetails(a:any) {
    const[details , setDetails] = useState<any>([])
    const params = useParams()
    let inst = ()=>{
    fbGet2(`users/institute/${params.id}`).then(res=>{
       
        console.log(res);
        setDetails(res);
        console.log(details)
      }).catch(err=>{
        console.log(err);
      })
      }
      useEffect(()=>{
   inst();
      },[])
  return (
          <div>
                
            <div style={{display:"flex", alignItems:"center"}} className="row"> 
            <div className="col-md-6 col-sm-12 text-center">
            <h3 style={{textTransform:"capitalize",}}>Name : {details.iName}</h3>
            <h3>Short Name : {details.sName}</h3>
      
            </div>
            <div className="col-md-6 col-sm-12 text-center">
        
            <h1> <img src={details.logo} style={{width:"150px", height:"150px"}} alt="" /></h1>
      
            </div>
            </div>
            
           <table  border={3}  className='table table-striped'>
            
            <tr>
              <th>Location </th>
              <td>{details.location}</td>
            </tr>
            <tr>
              <th>No.of Campus</th>
              <td>{details.campuses}</td>
            </tr> <tr>
              <th>Medium </th>
              <td>{details.campusesD}</td>
            </tr> <tr>
              <th>Contact </th>
              <td>{details.contact}</td>
            </tr>  <tr>
              <th>Address </th>
              <td>{details.address}</td>
            </tr> <tr>
              <th>Owner ContactNo. </th>
              <td>{details.ownerC}</td>
            </tr> <tr>
              <th>UserType </th>
              <td>{details.userType}</td>
            </tr>
            <tr>
              <th>Owner Email </th>
              <td>{details.email}</td>
            </tr>
            
            </table> 
      
      
      </div>
      
      
      
   
  )
}





   
    
