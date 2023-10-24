import { type } from 'os'
import React from 'react'
type tableType ={
    cols : any[];
    data : any[];

     
}
export default function ATable(props:tableType) {

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
<tr>{props.cols.map((y,j)=>{

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
