import React from 'react';

const Signin = () => {
    return (
        <div className="  min-h-screen lg:flex  items-center justify-evenly bgslate-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className=' bgwhite lg:w-1/2 lg:h-[80vh]  '>
                <h1>Welcome to my era...</h1>
                <img className=' mt-1 object-contain h-[90%] w-full lg:block hidden ' src="/src/assets/ca9fc318b886e94f955210931d96caff.png" alt="computer img" />
            </div>
            <div className="max-w-sm mt-2 w-full dark:bg-gray-800  bg-violet-200   p-3 h-[80vh] space-y-8 rounded-tl-3xl rounded-br-3xl shadow-lg shadow-gray-900 dark:border-none border- border-blue-0">
                <div>
                    <h2 className="mt-16 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">Sign in </h2>
                </div>
                <form className="mt-4 space-y-16 ">
                    <div className="rounded-md mt-14 shadow-sm space-y-4 ">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username" name="username" type="text" autoComplete="username" required className="  appearance-none rounded-none bg-violet-200 relative block w-full px-3 py-2 border-2 border-violet-300 dark:border-none dark:bg-gray-700 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="  appearance-none bg-violet-200 rounded-none relative block  w-full px-3 py-2 border-2 border-violet-300 dark:border-none dark:bg-gray-700  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group  relative w-full flex justify-center py-2 px-4 border  border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                            <span className="absolute right-2 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                        <a className=' float-end p-4' href="/">forgot password ?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
