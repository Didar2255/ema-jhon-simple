import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const { hendelForm } = useFirebase()
    return (
        <div className='login-form'>
            <div className='main-form'>
                <h1>Create account</h1>
                <form onSubmit={hendelForm}>
                    <input type="email" name="email" id="" placeholder='Your email' /><br /><br />
                    <input type="password" name="password" id="" placeholder='Your password' />
                    <br /><br />
                    <input type="password" name="password" id="" placeholder='Re-enter password' /><br /><br />
                    <input type="submit" value="Create your account" />
                </form>
                <p className='link'>Already have an account ? <Link to='login'>Log-in</Link></p>
                <div>---------------OR-----------------</div>
                <br />
                <button className='btn-regular'><i class="fab fa-google"></i> Sign with Google</button>
            </div>
        </div>
    );
};

export default Register;