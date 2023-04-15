import axios from "axios"
import './Header.css'

import {Container , Navbar} from 'react-bootstrap'


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
        <section className="header flex h-12">
            <h1 className="text-gray-300 text-5xl hover:text-white">Spentrace</h1>
            {
                props.user.loggedIn && <i className="fi fi-rr-sign-out-alt text-gray-300 text-2xl"></i>
            }
            
        </section>
    )
}

export default Header