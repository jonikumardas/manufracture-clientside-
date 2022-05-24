import React from 'react';
import goog from '../../assats/google.png'
import git from '../../assats/github.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-2">
                <div className="card-body">
                    <h2 className="text-center text-3xl text-success my-5 font-bold ">Log In</h2>
                    <form>
                        <p className='text-1xl'>Email </p>
                        <input type="text" placeholder="Enter email " className="input input-bordered input-success w-full max-w-xs my-2" /> <br />
                        <p className='text-1xl'>Password </p>
                        <input type="text" placeholder=" Enter password " className="input input-bordered input-success w-full max-w-xs" /> <br />
                        <div className="card-actions w-full justify-center mt-3">
                            <button className="btn btn-outline btn-success uppercase px-6"> Log In </button>
                        </div>
                    </form>
                    <p className='text-1xl'>Don't have acount? <Link to='/registation'><span className='text-success'> Create account</span></Link> </p>
                    <div className="divider">OR</div>
                    <button class="btn btn-outline btn-success"><img src={goog} width="45px" alt="" /> sign in with google</button>
                    <button class="btn btn-outline btn-success"><img src={git} width="45px" alt="" />sign in with github</button>
                </div>
            </div>
        </div>

    );
};

export default LogIn;