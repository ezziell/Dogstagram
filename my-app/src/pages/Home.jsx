import React from 'react';
import { Link } from 'react-router-dom';
import getDatos from '../hooks/getInformation';
import "../styles/Home.scss";

const Home = () => {
    return(
        <body>
            <div className='welcome-container'>
                <div className='left-side'>
                    <h1>Join Dogstagram</h1>
                    <img src='https://i.imgur.com/8JL9j46.png' />
                </div>
                <div className='right-side'>
                    <h2>Create your account</h2>
                    <form className='create-acc'>
                    <p>Full name</p>
                    <input type="email" className="email-input"/>
                    <p>Username</p>
                    <input type="text" className="username-input" id='accUser'/>
                    <p>Describe yourself</p>
                    <input type="text" className="description" id='accDescription' />
                    <p>Password</p>
                    <input type="password" className="password-input"/>
                    </form>
                    
                    <button type='button' className='sesion-btn' id='infobtn' onClick={getDatos}>
                        <Link to="/Account" >
                        Get started
                        </Link>
                        </button>
                    
                </div>
            </div>
        </body>
    );
}

export default Home;