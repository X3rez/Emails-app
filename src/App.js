import React from 'react';

import UserPanel from "./pages/UserPanel/index";

import Home from "./pages/Home/index";

import {BrowserRouter,Route} from 'react-router-dom'

import Editor from './components/Editor/index'

import AuthProvider from './context/AuthContext'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import AddEmail from "./pages/AddEmail/index";

import Emails from "./pages/Emails/index";



function App() {

  return (
    <>
        <BrowserRouter>
          <AuthProvider>

            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/userpanel" component={UserPanel}/> 
            <PrivateRoute path='/userpanel/editor' component={Editor}/>
            <PrivateRoute path='/userpanel/addemail' component={AddEmail}/>
             <PrivateRoute path='/userpanel/emails' component={Emails} />
            {/*<PrivateRoute path='/userpanel/configurations' component={} /> */}
          </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
