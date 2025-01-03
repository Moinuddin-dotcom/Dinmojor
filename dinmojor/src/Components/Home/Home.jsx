import React from 'react'
import heroImage from '../../../src/assets/Hero.png'
import { TiVendorApple } from "react-icons/ti";
import { BiLogoPlayStore } from "react-icons/bi";


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content max-w-[90vw] flex-col lg:flex-row-reverse xl:gap-60">
                    <div>
                        <img
                            src={heroImage}
                            className="lg:max-w-xl  " />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold"><span className='text-gray-600'> আমি হব </span> <span className='text-[#00424D]'> দিনমজুর</span></h1>
                        <p className="py-6 text-lg text-gray-600">
                            ব্যস্ত জীবন, সহজ সমাধান
                        </p>
                        <label className="input input-bordered flex items-center gap-2 mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow" placeholder="দিনমজুর খুজছেন?" />

                        </label>
                        <p className='my-5 text-gray-600'>বেশি অনুসন্ধান হয়েছে। বাজার লাগবে, নাস্তা লাগবে, ওষুধ লাগবে</p>
                        <button className="btn mr-5">
                            <div className='flex'>
                                <div className="logo">
                                    <TiVendorApple className='text-4xl' />
                                </div>
                                <div className="text">
                                    <p className='text-[10px]'>Download on the</p>
                                    <p>App Store</p>
                                </div>
                            </div>
                        </button>
                        <button className="btn bg-black hover:bg-black text-white mr-5">
                            <div className='flex'>
                                <div className="logo">
                                    <BiLogoPlayStore className='text-4xl' />
                                </div>
                                <div className="text">
                                    <p className='text-[10px]'>Get it on</p>
                                    <p>Google play</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
