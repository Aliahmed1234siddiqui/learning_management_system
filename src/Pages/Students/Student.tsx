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
import { BrowserRouter as Routers , Routes , Route , useNavigate } from 'react-router-dom'


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

import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import RedeemIcon from '@mui/icons-material/Redeem';
import SettingsIcon from '@mui/icons-material/Settings';
import AssissmentCreation from './assissmentCreation';
import Communcation from './Communcation';
import CourseCat from './CourseCat';
import CourseCreation from './courseCreation';
import Custom from './Custom';
import Dashboard from './Dashboard';
import FinancialManage from './FinancialManage';
import GradeBook from './GradeBook';
import ReportandA from './ReportandA';
import ResourceM from './ResourceM';
import Schdule from './Schdule';
import StudentM from './StudentM';
import { Assessment } from '@mui/icons-material';
import AButton from '../../Components/BUTTON/AButton';
import { Logout } from '../../config/Firbase/FirebaseMethod';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Student(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

let Arr = [
    {
        name:"Dashboard",
        route:"Dashboard",
   
    },
    {
        name:"Course Catalog",
        route:"CourseCat",
      
    },
    {
        name:"Course Creation",
        route:"courseCreation",
        
    },
    {
      name:"Financial Management",
      route:"FinancialManage",
      
  },{
    name:"Assissment Creation",
    route:"assissmentCreation",
    
},{
  name:"Grade book",
  route:"GradeBook",
  
},{
  name:"Report and Analytics",
  route:"ReportandA",
  
},{
  name:"Student Management",
  route:"StudentM",
  
},{
  name:"Resource Management",
  route:"ResourceM",
  
},{
  name:"Schduling",
  route:"Schdule",
  
},{
  name:"Communcation",
  route:"Communcation",
  
},{
  name:"Customization",
  route:"Custom",
  
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
    <div><h2  className='text-center fw-bolder m-3' >STUDENT</h2>
    <p className='text'>mordern student dashboard</p>
      
      
     
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
       <div>STUDENT PANEL</div>
       {/* <Form.Control width={75} placeholder='serach here' aria-label="Text input with checkbox" />
        <InputGroup.Text><SearchIcon />  </InputGroup.Text><CircleNotificationsIcon className='mx-2' />  <MarkChatUnreadIcon className='mx-2' />  <RedeemIcon className='mx-2'/>  <SettingsIcon className='mx-2'/>
       <SearchIcon /> */}
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
<Route path='assissment' element={<AssissmentCreation/>} />
<Route path='CourseCat' element={<CourseCat/>} />
<Route path='assissmentCreation' element={<AssissmentCreation/>} />

<Route path='Communcation' element={<Communcation/>} />
<Route path='CourseCreation' element={<CourseCreation/>} />
<Route path='Custom' element={<Custom/>} />
<Route path='Dashboard' element={<Dashboard/>} />
<Route path='FinancialManage' element={<FinancialManage/>} />
<Route path='GradeBook' element={<GradeBook/>} />
<Route path='ReportandA' element={<ReportandA/>} />
<Route path='ResourceM' element={<ResourceM/>} />
<Route path='Schdule' element={<Schdule/>} />
<Route path='StudentM' element={<StudentM/>} />
      </Routes> 
      </Box>
    </Box>
  );
}