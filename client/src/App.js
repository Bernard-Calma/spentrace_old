import axios from 'axios'
import { useState } from 'react'

import {Container, Row, Col, Button} from 'react-bootstrap'
import './App.css';

import Header from './Containers/Header/Header';
import LandingPage from './Containers/LandingPage/LandingPage';

const App = () => {
  // ------------------------------ VARIABLES ------------------------------
  // Server
  const [server] = useState(process.env.REACT_APP_SERVER_URL)
  // View
  const [view, setView] = useState("Login")
  // User information
  const [user, setUser] = useState({
    username: "",
    loggedIn: false
  })
  // ------------------------------ END OF VARIABLES ------------------------------

  const [testVar, setTestVar] = useState("Test")
  const apiCall = () => {
    axios({
      method: "GET",
      url: "http://localhost:8000"
    })
    .then(res => setTestVar(res.data))
    .catch(err => console.log(err))
  }
  return <main className='container-none'>
    <Header 
      server = {server}
      user = {user}
    />
    {
      !user.loggedIn
      ? <LandingPage />
      : <>
      </>
    }
  </main>
}

export default App;
