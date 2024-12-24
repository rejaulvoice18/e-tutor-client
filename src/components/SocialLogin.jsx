import React from 'react';

const SocialLogin = () => {
    const handleGoogleSignIn = () => {
        signInWithGooglePopUp()
            .then(result => {
                // console.log(result.user)
            })
            .catch(err => {
                // console.log(err.message)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn mt-3 flex justify-center mx-auto'>Google</button>
        </div>
    );
};

export default SocialLogin;