import React from 'react';
import goog from '../../assats/google.png'
import git from '../../assats/github.png'

const LogIn = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-2">
                <div className="card-body">
                    <h2 className="text-center text-3xl text-success ">Log In</h2>
                    <form>
                        <p className='text-1xl'>Email </p>
                        <input type="text" placeholder="Enter email " className="input input-bordered input-success w-full max-w-xs my-2" /> <br />
                        <p className='text-1xl'>Password </p>
                        <input type="text" placeholder=" Enter password " className="input input-bordered input-success w-full max-w-xs" /> <br />
                    </form>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-success uppercase"> Log In </button>
                    </div>
                    <div className="divider">OR</div>
                    <img src="" alt="" />
                    <button class="btn btn-outline btn-success">Success</button>
                    <button class="btn btn-outline btn-success">Success</button>
                </div>
            </div>


        </div>

    );
};

export default LogIn;