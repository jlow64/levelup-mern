import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import apis from './api/index';
import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Scratch from './pages/Scratch';
import Projects from './pages/Projects';
import Awards from './pages/Awards';
import ClassInformation from './pages/ClassInformation';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const getData = async() => {
    const res = await apis.getUsers()
    setUsers(res.data)
  };

  useEffect(() => {
    getData()
  }, []);

  const successLogin = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <Login successLogin={successLogin} users={users} />
    );
  } else {
    return (
      <>
        <Router>
          <Navbar logout={logout} />
          <Switch>
            <Route exact path='/' />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/scratch' exact component={Scratch} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/awards' exact component={Awards} />
            <Route path='/class_information' exact component={ClassInformation} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
