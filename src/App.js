import React from 'react';

import UserPanel from "./pages/UserPanel/index";

import Home from "./pages/Home/index";

import {BrowserRouter,Route} from 'react-router-dom'

import AuthProvider from './context/AuthContext'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'




function App() {

  return (
    <>
        <BrowserRouter>
          <AuthProvider>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/userpanel" component={UserPanel}/> 

            {/* <Route path="/userpanel" component={UserPanel}/>  */}
          </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
