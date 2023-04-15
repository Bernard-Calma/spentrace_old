import axios from 'axios'
import { useState } from 'react'

import {Container, Row, Col, Button} from 'react-bootstrap'
import './App.css';
import Header from './Containers/Header/Header';

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
  return <Container 
            fluid 
            style={{
              paddingLeft: 0, 
              paddingRight: 0
              }}> 
    <Header 
      server = {server}
    />
  </Container>
}

export default App;
