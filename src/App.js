import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar/index'
import Index from './components/Index/index'
import Contact from './components/Contact/index'


const App=()=> {
  return (
    <BrowserRouter>
     
      <Navbar/>
      <Route exact path='/' component={Index}/>
      <Route path='/contact' component={Contact}/>
     
    </BrowserRouter>
  );
}

export default App;
