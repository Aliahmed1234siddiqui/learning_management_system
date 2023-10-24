import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Routers , Routes , Route , useNavigate, useParams } from 'react-router-dom'


import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import RedeemIcon from '@mui/icons-material/Redeem';
import SettingsIcon from '@mui/icons-material/Settings';
import AddQuiz from './TeacherForm';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import Quiz from './TeacherList';
import RegistrationControl from './RegistrationControl';
import StudentDetails from './StudentDetails';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import AButton from '../../Components/BUTTON/AButton';
import { Logout, fbGet } from '../../config/Firbase/FirebaseMethod';
import TeacherForm from './TeacherForm';
import TeacherForms from './TeacherForm';
import TeacherList from './TeacherList';
import TeacherDetails from './TeacherDetails';
import FinancialManagement from './FinancialManagement';
import {useState ,useEffect} from "react"


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Institude(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const[intdata , setIntdata] = useState<any>([]);
const params = useParams();
let get = ()=>{
  console.log(params.id);
  fbGet(`users/institute`, params.id).then((res)=>{
    console.log(res);
    setIntdata(res)
  }).catch((err)=>{
    console.log(err.message)
  })
}
useEffect(()=>{
get();
},[])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

let Arr = [
    {
        name:"Course List",
        route:"CourseList",
   
    },
    {
        name:"Registration Control",
        route:"RegistrationControl",
      
    },
  
 {
    name:"Student List",
    route:"StudentList",
    
}, {

  name:"Teacher List",
  route:"TeacherList",
  
},
{
  name:"Financial Management",
  route:"FinancialManagement",
  
}, 
   
    
];
const navigate = useNavigate()
let openPage=(route:string)=>{
navigate(`./${route}`)

}
let logout= ()=>{
  Logout().then(res=>{
navigate('../../Login')
  }).catch(err=>{

  })
}


  const drawer = (
    <div><h2  className='text-center fw-bolder m-3' > 
    <img src={intdata[8]} style={{height:"100px",width:"100px",}} alt="" />
    </h2>
    <p className='text'>mordern institude dashboard</p>
      
      
     
      <List>
        {Arr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>{openPage(x.route)}}>
            {/* <ListItemIcon>
                {x.icon}
              </ListItemIcon> */}
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      
        position="fixed"
        sx={{
          backgroundColor: 'black',
          color:"white",
          paddingTop:"4px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
           <InputGroup className="mb-1">
       <div>{intdata[5]}</div>
     
   
      </InputGroup>
      <AButton clicked={()=>{
        logout();
       }} label='LOGOUT'/>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
       <Routes>
<Route path='AddQuiz' element={<AddQuiz/>} />
<Route path='FinancialManagement' element={<FinancialManagement/>} />

<Route path='CourseForm' element={<CourseForm/>} />
<Route path='CourseList' element={<CourseList/>} />
<Route path='TeacherForm' element={<TeacherForms/>} />
<Route path='RegistrationControl' element={<RegistrationControl/>} />
<Route path='TeacherList' element={<TeacherList/>} />
<Route path='TeacherDetails/:id' element={<TeacherDetails/>} />
<Route path='StudentDetails/:id' element={<StudentDetails/>} />
<Route path='StudentForm' element={<StudentForm/>} />
<Route path='StudentList' element={<StudentList/>} />




      </Routes> 
      </Box>
    </Box>
  );
}