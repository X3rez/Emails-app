import React from 'react';

import UserPanel from "./pages/UserPanel/index";

import Home from "./pages/Home/index";

import {BrowserRouter,Route} from 'react-router-dom'

import AuthProvider from './context/AuthContext'

function App() {

  return (
    <>
        <BrowserRouter>
          <AuthProvider>
            <Route path="/" exact component={Home}/>
            <Route path="/userpanel" component={UserPanel}/> 
          </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
