import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { popUpSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        popUpSignIn()
            .then(result => {
                toast.success('Google Sign In Successfull!!')
                navigate('/')
            })
            .catch(err => {
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn mt-3 flex justify-center mx-auto'>Google</button>
        </div>
    );
};

export default SocialLogin;