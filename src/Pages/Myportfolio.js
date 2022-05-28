import React from 'react';
import { Link } from 'react-router-dom';
import joni from '../assats/jonikumarassinment.jpg'

const Myportfolio = () => {
    return (
        <div className='px-4 bg-slate-600'>
            <h1 className='text-4xl text-amber-500 text-center font-bold my-5 py-5 '>My portfolio </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div >
                    <img className=' lg:w-96 lg:mt-4 rounded mx-auto py-4' src={joni} alt="" />
                </div>
                <div className='rounded mx-auto items-center '>
                    <div className='justify-center items-center lg:mt-20'>
                        <h2 className='text-2xl text-center text-success font-bold '> About me </h2>
                        <p > Hello this is joni kumar das, I am a student of honours 3rd year at mathematics In Netrakona govt college. I am a junior web devoloper. And I always try to learn new things.I am very confident person. I am hungry to learn more. I know how to do problem solove by help google. I am not a professionl but I am a learner .  my dream ! I will a great programmer. I was starting my  learning web devolopment since 2018.I never give up. I am able to maintain my time.and I have availity to  doing  heard work. I am allways ready to scrifice and to achive somthing</p>
                    </div>
                    <div>
                        <h1 className='text-amber-500 font-bold mt-5'> My Projects </h1>
                        <div className='grid grid-cols-2 lg:grid-cols-3'>
                            <div>

                                <Link className='btn btn-success btn-outline  m-2' to=' https://serene-brown-3a8d35.netlify.app/'> javscript project </Link>
                            </div>
                            <div>

                                <Link className='btn btn-success btn-outline m-2 ' to=' https://github.com/programming-hero-web-course2/phone-hunter-jonikumardas'>json Api project</Link>
                            </div>
                            <div>

                                <Link className='btn btn-success btn-outline m-2 ' to='https://goofy-spence-177a18.netlify.app/'> Broser Api project </Link>
                            </div>
                            <div>

                                <Link className='btn btn-success btn-outline  m-2' to='https://poetic-biscotti-fdd5a4.netlify.app'> bootstrap project</Link>
                            </div>

                            <div>

                                <Link className='btn btn-success btn-outline m-2 ' to='https://poetic-biscotti-fdd5a4.netlify.app'> html css projects</Link>
                            </div>
                            <div>
                                <Link className='btn btn-success btn-outline  m-2' to=' https://jonikumardas.github.io/assignment-1/'>html project</Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Myportfolio;