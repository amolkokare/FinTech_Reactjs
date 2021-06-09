import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Home } from './Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



function App() {


  



  return (
   <BrowserRouter>

   <div>
    
   </div>

    <div className="container">
    

    <h3 className="m-3 d-flex justify-content-center">
        Fintech
        
      </h3>
     

      <Switch>
      <Route path ='/' component={Home} exact/>
         
      </Switch>
        </div>
    </BrowserRouter> 
  );
}

export default App;
