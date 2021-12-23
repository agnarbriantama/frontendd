import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Consulting from './components/pages/Consulting';
import Registrasi from './components/pages/Registrasi';
import Login from './components/pages/Login';
import Contactus from './components/pages/Contactus';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/registrasi' component={Registrasi} />
        <Route path='/login' component={Login} />
        <Route path='/contactus' component={Contactus} />
      
      </Switch>
    </Router>
  );
}

export default App;
