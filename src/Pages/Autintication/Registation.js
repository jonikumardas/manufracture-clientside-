import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import goog from '../../assats/google.png'
import git from '../../assats/github.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const Registation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const takemail = e => {
        setEmail(e.target.value);
    }
    const tkpassword = e => {
        setPassword(e.target.value);
    }
    const tkrepassword = e => {
        setRepassword(e.target.value);
    }
    const hanldeSubmit = e => {
        e.preventDefault();
        if (password === repassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            return toast.error("password not match");
        }

    }
    if (user) {
        return toast.success("Account created successs!")
    }
    if (loading) {
        return toast.loading("process loading")
    }
    if (error) {
        return toast.error("somthing is wrong");
    }
    return (
        <div>
            <div className="card sm:w-94 lg:w-96 bg-base-100 shadow-xl mx-auto mt-2 ">
                <div className="card-body">
                    <h2 className="text-center text-3xl text-success my-5 font-bold ">Register Now</h2>
                    <form onSubmit={hanldeSubmit}>
                        <p className='text-1xl'>Email </p>
                        <input onBlur={takemail} type="email" name='email' placeholder="Enter email " className="input input-bordered input-success w-full max-w-xs my-2 " required /> <br />
                        <p className='text-1xl'>Password </p>
                        <input onBlur={tkpassword} type="password" placeholder=" Enter password " className="input input-bordered input-success w-full max-w-xs my-2" required pattern="[a-zA-Z0-9]+" minLength="6" maxLength="10" /> <br />
                        <p className='text-1xl'>Re type password</p>
                        <input onBlur={tkrepassword} type="password" placeholder=" Enter re-password " className="input input-bordered input-success w-full max-w-xs my-2" required /> <br />
                        <div className="card-actions w-full justify-center mt-3">
                            <button type='submit' className="btn btn-outline btn-success uppercase px-6"> Register </button>
                        </div>
                    </form>
                    <p className='text-1xl'>Already have acount? <Link to='/login'><span className='text-success'> please log in</span></Link> </p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-success"><img src={goog} width="45px" alt="" /> sign in with google</button>
                    <button className="btn btn-outline btn-success"><img src={git} width="45px" alt="" />sign in with github</button>
                </div>
            </div>
            <ToastContainer />


        </div>
    );
};

export default Registation;