import React from 'react';

import UserPanel from "./pages/UserPanel/index";

import Home from "./pages/Home/index";

import {BrowserRouter,Route} from 'react-router-dom'


function App() {

  return (
    <>
        <BrowserRouter>
        
            <Route path="/" exact component={Home}/>
            <Route path="/userpanel" component={UserPanel}/>
            
        </BrowserRouter>
    </>
  );
}

export default App;
