import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'

import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import CorporateTraining from './Components/pages/CorporateTraining';
import Microsoft from './Components/pages/Microsoft';
import AboutUs from './Components/pages/AboutUs';
import Home from './Components/pages/Home';
import NewCourse from './Components/pages/NewCourse';
import ManisHiring from './Components/pages/ManisHiring';
import SocialResponsbility from './Components/pages/SocialResponsbility';
import Cisco from './Components/pages/Cisco';
import Sap from './Components/pages/Sap';
import MotivationalTraining from './Components/pages/MotivationalTraining';
import SignUp from './Components/pages/Signupbutton';
import ContactUs from './Components/pages/ContactUs';



function App() {
  return (
   <Router>
   <Navbar/>
   <Switch>
     <Route path='/corporate' exact component={CorporateTraining}/>
     <Route path='/microsoft' exact component={Microsoft}/>
     <Route path='/about' exact component={AboutUs}/>
     <Route path='/' exact component={Home}/>
     <Route path='/course' exact component={NewCourse}/>
     <Route path='/manis' exact component={ManisHiring}/>
     <Route path='/social' exact component={SocialResponsbility}/>
     <Route path='/cisco' exact component={Cisco}/>
     <Route path='/sap' exact component={Sap}/>
     <Route path='/motivational' exact component={MotivationalTraining}/>
     <Route path='/SignUp' exact component={SignUp}/>
     <Route path='/contact-us' exact component={ContactUs}/>
   </Switch>
   </Router>
   
  
  );
}

export default App;
