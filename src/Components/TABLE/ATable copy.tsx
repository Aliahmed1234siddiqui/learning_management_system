import { type } from 'os'
import React from 'react'
import { useNavigate } from 'react-router-dom';
type tableType ={
    cols : any[];
    data : any[];
     clicked?:any,
     node:any,
     
}
export default function ABTable(props:tableType) {
  const{clicked,node} = props
  const navigate = useNavigate();
  return (
    <div>
      
      <table border={3} className='table table-striped' >

        <thead>
<tr>   
  {props.cols.map((x,i)=>{
    return(
<th key={i}>{x.display}</th>
    )
  })}
</tr>
        </thead>
        <tbody>

{props.data.map((x,i)=>{
  return(
<tr onClick={()=>{
  navigate(`../${node}/${x.id}`
  
  )}}>{props.cols.map((y,j)=>{

  return  y.display === "Logo"?(
    
<td><img src={x[y.key]} alt="" width={50} height={50} /></td>
  ):(
    <td>{x[y.key]}</td>
  )
})}</tr>
  )
})}
   

        </tbody>
      </table>
    </div>
  )
}
