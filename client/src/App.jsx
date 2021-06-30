import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import apis from './api/index';
import Navbar from './components/Navbar';
import LogoutModal from './components/LogoutModal';
import './App.css';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Scratch from './pages/Scratch';
import Projects from './pages/Projects';
import Awards from './pages/Awards';
import ClassInformation from './pages/ClassInformation';
import Invite from './pages/Invite';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

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
      <>
        <Login successLogin={successLogin} users={users} />
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Navbar logout={logout} />
          <svg className='profile-bar' width="120" height="56" viewBox="0 0 120 56" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={openModal}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.9999 34.1503H38.0246V28.8044C38.0246 26.0504 36.2111 23.7123 33.7158 22.9207C33.6687 21.2615 32.3052 19.9259 30.6348 19.9259H30.5825C28.9305 19.9259 27.5781 21.2321 27.5029 22.8658C24.9142 23.5992 23.0121 25.9838 23.0121 28.8044V34.1503H21.0369V39.2199H27.417C27.6555 40.7169 28.9552 41.8649 30.5183 41.8649C32.0815 41.8649 33.3812 40.7169 33.6197 39.2199H39.9998V34.1503H39.9999ZM30.5825 20.9179H30.6348C31.6802 20.9179 32.5489 21.6888 32.7022 22.692C32.4246 22.6536 32.1413 22.6333 31.8534 22.6333H29.1833C28.959 22.6333 28.7375 22.6457 28.5193 22.6692C28.6822 21.6772 29.5452 20.9179 30.5825 20.9179ZM30.518 40.8731C29.5037 40.8731 28.6519 40.1665 28.4273 39.2199H32.6086C32.3841 40.1665 31.5322 40.8731 30.518 40.8731ZM39.0081 38.2279H22.0289V35.1421H24.0041V28.8043C24.0041 25.9484 26.3275 23.625 29.1834 23.625H31.8536C34.7094 23.625 37.0328 25.9484 37.0328 28.8043V35.1421H39.0081V38.2279Z" fill="#979797"/>
            <circle cx="17.4815" cy="23.4815" r="9.48148" fill="#ED3228"/>
            <path d="M18.0967 27H17.5108V20.5938L15.5772 21.3115V20.7646L17.9991 19.8662H18.0967V27Z" fill="white"/>
            <circle cx="92" cy="28" r="28" fill="#DADADA"/>
            <path d="M104.9 32C104.9 32 106.5 29.2 106.5 25C106.5 19.5 102.45 13 92 13C81.55 13 77.5 19.5 77.5 25C77.5 29.2 79.05 32 79.05 32C77.25 34.05 76.15 38.2 77.7 40.9C78.35 42 84.75 45.9 85.35 38.95H98.55C99.2 45.85 105.6 42 106.2 40.9C107.8 38.2 106.7 34.05 104.9 32Z" fill="#594640"/>
            <path d="M92 15C84.35 15 78.75 19 78.75 24C78.75 24 80.8 16.5 92 16.5C103.2 16.5 104.75 24 104.75 24C104.75 19 99.65 15 92 15Z" fill="#C28FEF"/>
            <path d="M104.65 33C107.75 33 107.75 28.5 104.65 28.5V27C104.65 27 87.15 26.55 83.15 20.5C84.15 26.6 79.3 28.5 79.3 28.5C76.2 28.5 76.2 33 79.3 33C79.3 36.5 82.95 42 91.95 42C100.95 42 104.65 36.5 104.65 33Z" fill="#FFE1BD"/>
            <path d="M98.25 33.5C100.045 33.5 101.5 32.0449 101.5 30.25C101.5 28.4551 100.045 27 98.25 27C96.4551 27 95 28.4551 95 30.25C95 32.0449 96.4551 33.5 98.25 33.5Z" fill="white"/>
            <path d="M85.75 33.5C87.5449 33.5 89 32.0449 89 30.25C89 28.4551 87.5449 27 85.75 27C83.9551 27 82.5 28.4551 82.5 30.25C82.5 32.0449 83.9551 33.5 85.75 33.5Z" fill="white"/>
            <path d="M98.25 32.5C99.4926 32.5 100.5 31.4926 100.5 30.25C100.5 29.0074 99.4926 28 98.25 28C97.0074 28 96 29.0074 96 30.25C96 31.4926 97.0074 32.5 98.25 32.5Z" fill="#664E27"/>
            <path d="M98.25 31C98.6642 31 99 30.6642 99 30.25C99 29.8358 98.6642 29.5 98.25 29.5C97.8358 29.5 97.5 29.8358 97.5 30.25C97.5 30.6642 97.8358 31 98.25 31Z" fill="#231F20"/>
            <path d="M85.75 32.5C86.9926 32.5 88 31.4926 88 30.25C88 29.0074 86.9926 28 85.75 28C84.5074 28 83.5 29.0074 83.5 30.25C83.5 31.4926 84.5074 32.5 85.75 32.5Z" fill="#664E27"/>
            <path d="M85.75 31C86.1642 31 86.5 30.6642 86.5 30.25C86.5 29.8358 86.1642 29.5 85.75 29.5C85.3358 29.5 85 29.8358 85 30.25C85 30.6642 85.3358 31 85.75 31Z" fill="#231F20"/>
            <path d="M96.05 36.05C93.45 37.85 90.55 37.85 87.95 36.05C87.65 35.85 87.35 36.2 87.55 36.55C88.35 37.85 89.95 39 92 39C94.05 39 95.65 37.85 96.45 36.55C96.65 36.2 96.35 35.85 96.05 36.05Z" fill="#664E27"/>
          </svg>
          <LogoutModal showModal={showModal} setShowModal={setShowModal} logout={logout} />
          <Switch>
            <Route exact path='/' />
            <Route path='/dashboard' exact render={(props) => (<Dashboard {...props} logout={logout} />)} />
            <Route path='/scratch' exact component={Scratch} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/awards' exact component={Awards} />
            <Route path='/class_information' exact component={ClassInformation} />
            <Route path='/invite' exact component={Invite} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;