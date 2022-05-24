import React, { useState } from 'react';
import goog from '../../assats/google.png'
import git from '../../assats/github.png'
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleemail = e => {
        setEmail(e.target.value)
    }
    const handlepassword = e => {
        setPassword(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const signInGoogle = () => {
        signInWithGoogle();

    }
    const githubSignIn = () => {
        signInWithGithub()

    }
    if (user || guser || gituser) {
        return toast.success("log in successful");
    }
    if (error || gerror || giterror)
        return toast.error("somthing is wrong");



    return (
        <div>
            <div className="card sm:w-94 lg:w-96 bg-base-100 shadow-xl mx-auto mt-2">
                <div className="card-body">
                    <h2 className="text-center text-3xl text-success my-5 font-bold ">Log In</h2>
                    <form onSubmit={signIn}>
                        <p className='text-1xl'>Email </p>
                        <input onBlur={handleemail}
                            type="email" placeholder="Enter email " className="input input-bordered input-success w-full max-w-xs my-2" required /> <br />
                        <p className='text-1xl'>Password </p>
                        <input
                            onBlur={handlepassword}
                            type="password" placeholder=" Enter password " className="input input-bordered input-success w-full max-w-xs" required ></input> <br />
                        <button className='text-success'> Forget password ?</button>
                        <div className="card-actions w-full justify-center mt-3">
                            <button type='submit' className="btn btn-outline btn-success uppercase px-6"> Log In </button>
                        </div>
                    </form>
                    <p className='text-1xl'>Don't have acount? <Link to='/registation'><span className='text-success'> Create account</span></Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={signInGoogle} className="btn btn-outline btn-success"><img src={goog} width="45px" alt="" /> sign in with google</button>
                    <button onClick={githubSignIn} className="btn btn-outline btn-success"><img src={git} width="45px" alt="" />sign in with github</button>
                </div>
            </div>
        </div>

    );
};

export default LogIn;