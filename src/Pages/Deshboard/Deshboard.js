import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className="drawer mt-5 rounded-md drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <label for="my-drawer-2" className="btn btn-sm btn-outline btn-goust absolute right-2 top-2 fixed-top lg:hidden">Deshboard</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 border-r-1 bg-slate-700 shadow-slate-300 text-base-content">

                    <li>
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <p className='font-bold text-success'>My Profile </p>
                    </li>
                    <li><Link to="deshborad/orders" >My order</Link ></li>
                    <li><Link to="deshborad/createadmin" >Create admin</Link ></li>
                    <li><Link to="deshborad/allClient"> All client </Link ></li>
                    <li><Link to="deshborad/addproduct" >Add product</Link ></li>
                    <li><Link to="deshborad/revews" >My revews</Link ></li>
                    <li><Link to="deshborad/history" >History</Link ></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;








