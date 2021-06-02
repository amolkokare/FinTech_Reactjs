import React,{useState} from 'react';
import{Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Drop from '../Components/Drop'
import {  ButtonToolbar } from 'react-bootstrap'
import Home from './pages/Home';

function Navbar(){

    const [click,setClick]= useState(false)
    
    const [dropdown ,setDropdown]= useState(false);

    
    const [dropdownc ,setdropdown]= useState(false);
    
   

    const handleClick =() => setClick(!click)
    const closeMenu=()=> setClick(false); 

    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
       };

       const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
       };
       
       const closeMenuc=()=> setClick(false);

       const onEnter=()=>{
        if(window.innerWidth<960){
            setdropdown(false);
        }else{
            setdropdown(true);
        }
       };

       const onLeave=()=>{
        if(window.innerWidth<960){
            setdropdown(false);
        }else{
            setdropdown(false);
        }
       };


    return(
        <>
        
        
         <nav className='navbar'>
         
             <img to ='/' src="/img/Mani's logo.bmp" alt=""></img>
             
             <Link to ='/'  className='navbar-logo'>
             
                 Mani's Corporate Training
             </Link>
             <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' :'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active'  : "nav-menu"}>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMenu}>
                         Home
                     </Link>
                 </li>
                 <li className='nav-item'
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
                 >
                     <Link to='/About-us' className='nav-links' onClick={closeMenu}>
                         About Us <i className='fas fa-caret-down'/>
                     </Link>
                     {dropdown && <Dropdown/>}
                 </li>
                 <li className='nav-item'
                 onMouseEnter={onEnter}
                 onMouseLeave={onLeave}
                 >
                     <Link to='/course-Catalogue' className='nav-links' onClick={closeMenuc}>
                     Course Catalogue <i className='fas fa-caret-down'/>
                     </Link>
                     {dropdownc && <Drop/>}
                 </li>
                 <li className='nav-item'>
                     <Link to='/contact-us' className='nav-links' onClick={closeMenu}>
                        Contact Us
                     </Link>
                 </li>
                 <li className='nav-item'>
                     <Link to='/SignUp' className='nav-links-mobile nav-links' onClick={closeMenu}>
                        Sign Up
                     </Link>
                 </li>
                 

             </ul>
            

         </nav>
        </>
    )
}
export default Navbar;