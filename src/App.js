import React from 'react';

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import UserPanel from "./pages/UserPanel/index";

import Home from "./pages/Home/index";

import Emails from "./pages/Emails/index";

import AddEmail from "./pages/AddEmail/index";

import Message from "./pages/Message/index";

import AuthProvider from './context/AuthContext'

import {BrowserRouter,Route} from 'react-router-dom'



function App() {

  return (
    <>
        <BrowserRouter>
          <AuthProvider>

            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/userpanel" component={UserPanel}/> 
            <PrivateRoute path='/userpanel/addemail' component={AddEmail}/>
            <PrivateRoute path='/userpanel/emails' component={Emails} />
            <PrivateRoute path='/userpanel/message/:email' component={Message}/>

          </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
