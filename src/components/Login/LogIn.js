import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'

const LogIn = () => {
    const { googelSignIn, hendelForm } = useAuth()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/shop'

    const history = useHistory()
    const hendelGoogleLogIn = () => {
        googelSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className='login-form'>
            <div className='main-form'>
                <h1 className='title'>Log-In</h1>
                <form onSubmit={hendelForm}>
                    <input type="email" placeholder='Your email' />
                    <br />
                    <br />
                    <input type="password" placeholder='Yourt password' />
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p className='link'>New to ema-jhon ? <Link to='/register'>Create Account</Link></p>
                <div>------------------OR------------------</div><br />

                <button onClick={hendelGoogleLogIn} className='btn-regular'> <i class="fab fa-google"></i> Sign with Google</button>
            </div>

        </div>
    );
};

export default LogIn;