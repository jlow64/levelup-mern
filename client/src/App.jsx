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
  const [users, setUsers] = useState([]);
  const getData = async() => {
    const res = await apis.getUsers()
    setUsers(res.data)
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/scratch' component={Scratch} />
          <Route path='/projects' component={Projects} />
          <Route path='/awards' component={Awards} />
          <Route path='/class_information' component={ClassInformation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
