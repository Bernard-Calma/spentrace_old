import axios from "axios"
import './Header.css'

import {Container , Navbar, Grid} from 'react-bootstrap'


const Header = (props) => {
    const handleSignOut = () => {
        console.log("Sign Out")
        axios({
            method: "GET",
            url: `${props.server}/users/signout`,
            withCredentials: true
        })
        .then(res => props.setUser({
            id: "",
            username: "",
            loggedIn: false
        }))
        .catch(error => console.log(error))
    }
    return(
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar.Brand>Spentrace</Navbar.Brand>
                {
                    props.user.loggedIn && <i class="fi fi-rr-sign-out-alt"></i>
                }
                
            </Container>
        </Navbar>
    )
}

export default Header