import React, { useContext } from 'react';
import SocialLogin from '../components/SocialLogin';
import LoginData from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import Title from '../components/Title';

const Login = () => {
    Title('Login')
    const { signInUser, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target 
        const email = form.email.value
        const password = form.password.value


        // sign in user with email password
        signInUser(email, password)
        .then(result=>{
            const currUser = result.user;
            setUser(currUser);
            toast.success('User Signed In Succeessfully!!')
            navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
            toast.error('Wrong Credentials')
        })



    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={LoginData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    
                    <SocialLogin></SocialLogin>
                    <div className="divider"><h1 className=" mt-4 text-2xl font-bold">Sign In now!</h1></div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <div className='flex justify-center pb-3'>
                        <h2>Don't Have Account? <Link to="/signup"><span className='text-green-500'>Register Here</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;