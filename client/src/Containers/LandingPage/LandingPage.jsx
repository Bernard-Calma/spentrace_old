import {Container, Col, Row, Form} from 'react-bootstrap'
import './LandingPage.css'

// Landing Page Images
import mainPageImage from "../../Images/MainPage.png"
import mobilePage from "../../Images/MobilePage.png"

const LandingPage = () => {
    return <section className="landingPage m-10 flex flex-row">
                <div className='basis-1/2'>
                    <div className='flex w-1/2 m-auto'>
                        <p className='m-auto'>Spentrace will help you list your earnings and expenses then provides how much you need to earn for your next bills.</p>
                        <img src={mobilePage} alt="Main Page"/>
                    </div>
                    <img className='m-auto' src={mainPageImage} alt="Main Page"/>
                </div>
            {
                <div className='basis-1/2'>
                    <h1>Login</h1>
                </div>
            }
    </section>
}

export default LandingPage