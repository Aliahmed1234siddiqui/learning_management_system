import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

import { fbLogin } from '../config/Firbase/FirebaseMethod';


type useModel = {
  email: string,
  password: string,
  

}


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Login() {
    const[model , setModel] = useState<useModel>({
        email:"",
        password:"",
        
      })
      const [expanded, setExpanded] = React.useState<string | false>();

      const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
          setExpanded(newExpanded ? panel : false);
        };
      
 let navigate = useNavigate();  



      
let login1= ()=>{
            fbLogin(model,"users").then((res:any)=>{  
                navigate('../mainAdmin');
  })
}
let login2= ()=>{
  fbLogin(model,"users/institute").then((res:any)=>{  
    navigate(`../institude/${res.id}`);
})
}
let login3= ()=>{
  fbLogin(model,"users/student").then((res:any)=>{  
    navigate('../student');
})
}
let login4= ()=>{
  fbLogin(model,"users/teacher").then((res:any)=>{  
    navigate('../Teachers');
})
}
  return (
    <div>
      
      <div className='app' >
        

   <div className="main   mx-auto  "  >
   <h1 className='text-white bg-black py-2 text-center'>LOG IN</h1>
   <div className="sub text-center ">
   <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  <Typography>LOGIN AS ADMIN</Typography>
</AccordionSummary>
<AccordionDetails>
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     
      <br />  <Button variant="contained" onClick={login1}>LOGIN</Button>
    
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
  <Typography>LOGIN AS INSTITUTE</Typography>
</AccordionSummary>
<AccordionDetails>
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     
      <br />  <Button variant="contained" onClick={login2}>LOGIN</Button>
      
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
  <Typography>LOGIN AS STUDENT</Typography>
</AccordionSummary>
<AccordionDetails>
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     
      <br />  <Button variant="contained" onClick={login3}>LOGIN</Button>
      
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
  <Typography>LOGIN AS STAFF</Typography>
</AccordionSummary>
<AccordionDetails>
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     
      <br />  <Button variant="contained" onClick={login4}>LOGIN</Button>
     
</AccordionDetails>
</Accordion>
<div className='m-3 '> this user is not found first signup ! <div className='btn btn-danger' onClick={()=>{
        navigate('../Signup');
      }}>Signup </div> 
      </div>
        </div>
        </div>

   </div>
    </div>
  
  )
}





 


