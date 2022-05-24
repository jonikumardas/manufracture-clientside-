import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from './Firebase/Firebase.init';

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div className="navbar px-12 border-x-5 shadow">
            <div className="navbar-start ">
                <div className="dropdown flex justify-center">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <p className='ml-10'>
                        <Link to='/home' className="font-bold text-lime-600 uppercase lg:text-4xl text-2xl"> Jon <span className=' text-amber-500'> Manufacturer</span> Tools</ Link>
                    </p>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content bg-slate-800 mt-3 p-2 shadow rounded-box w-52">
                        <li className='ms-1'><NavLink to='/home' >Home</NavLink ></li>
                        <li tabIndex="0">
                            <NavLink to='/services' className="justify-between">
                                Services
                            </NavLink>
                        </li>
                        <li><NavLink to='/order' >Order</NavLink ></li>
                        <li><NavLink to='/payment'>Payment</NavLink ></li>
                        <li><NavLink to='/blog'>Blog</NavLink ></li>
                        <li><NavLink to='/about'>About</NavLink ></li>
                        {
                            user ?
                                <li><NavLink to='/logIn' onClick={logOut}>SignOut</NavLink ></li> : <li><NavLink to='/logIn'>LogIn</NavLink ></li>
                        }

                    </ul>
                </div>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    <li><NavLink to='/home' >Home</NavLink ></li>
                    <li tabIndex="0">
                        <NavLink to='/services' >
                            Services
                        </NavLink >
                    </li>
                    <li><NavLink to='/order' >Order</NavLink ></li>
                    <li><NavLink to='/payment' >Payment</NavLink ></li>
                    <li><NavLink to='/blog' >Blog</NavLink ></li>
                    <li><NavLink to='/about' >About</NavLink ></li>
                    {
                        user ?
                            <li><NavLink to='/logIn' onClick={logOut}>SignOut</NavLink ></li> :
                            <li><NavLink to='/logIn'>LogIn</NavLink ></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navber;