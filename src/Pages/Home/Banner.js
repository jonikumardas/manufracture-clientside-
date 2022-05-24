import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assats/1.jpeg'
import image3 from '../../assats/2.jpeg'
import image2 from '../../assats/3.jpeg'
import image4 from '../../assats/4.jpeg'

const Banner = () => {
    return (
        <div className='grid gap-5 lg:grid-cols-2 mt-5 justify-evenly lg:mx-5  lg:pt-12 mx-2'>
            <div className='text-gray-200 lg:mt-12'>

                <h1 className=' font-bold  border-l-4 border-l-amber-600 '>
                    <p className="text-sm ml-3">we are making the best quality</p><span className='text-lime-600 ml-3 text-4xl'>Best parts of motors </span></h1>
                <p className="my-3">
                    We are providing best client services and We are the number one motors manufractuar company in the world.
                    we are wholeseller we are buying Our motors parts packege ways. If you want to know  about more details .
                </p>
                <button className="btn btn-outline btn-success"><Link to="/services">Explore now</Link></button>


            </div>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={image2} alt='' className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={image1} alt="" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={image3} alt="" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={image4} alt="" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>

            </div>


        </div>
    );
};

export default Banner;