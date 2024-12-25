import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../assets/lottie/register.json'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()

        const form = e.target 
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.table({email, password})

        // creating new user
        createNewUser(email, password)
        .then(result=>{
            const newUser = result.user
            setUser(newUser)
            console.log(result)

            //updating user info
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=>{

            })
           toast.success('Account created Successfully')
           navigate('/')
           console.log(result)
        })
        .catch(err=>{
            console.log(err.message)
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-96">
               <Lottie animationData={registerLottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                    </div> <div className="form-control">
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;