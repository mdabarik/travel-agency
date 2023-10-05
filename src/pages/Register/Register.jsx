import { Link, Navigate } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import fbLogo from '../../assets/facebook-logo.png';
import glLogo from '../../assets/google-logo.png';
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalProvider";

const Register = () => {

    const {isLoggedIn} = useContext(GlobalContext);

    if (isLoggedIn) {
        return <Navigate to="/"></Navigate>;
    }


    return (
        <div className="flex flex-col items-center justify-center border-2 w-[60vw] mx-auto rounded-sm py-16 mt-8">
            <div className="flex flex-col gap-6 w-full px-16">
                <h2 className="text-3xl font-bold text-left w-[45vw] mb-3">Register</h2>
                <form className="flex flex-col gap-y-6">
                    <div className="relative h-11 w-full">
                        <input
                            name="firstname"
                            type="text"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            First Name
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            name="lastname"
                            type="text"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Last Name
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            name="name"
                            type="email"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Username or Email
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            type="password"
                            name="password"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            type="password"
                            name="password"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Confirm Password
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-warning w-full" value="Register" />
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <span>Already have an account? <Link to="/login" className="text-sm text-[#F9A51A] underline ml-1">Login here</Link></span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="w-[60%] border-[1.5px]"></div>
                    {/* facebook login */}
                    <div className="flex items-center justify-around w-[60%] border-2 rounded-full px-5 py-2">
                        <FaFacebook className="text-3xl"></FaFacebook>
                        {/* <img src={glLogo} alt="fb logo" /> */}
                        <span>Continue with Facebook</span>
                    </div>
                    {/* google login */}
                    <div className="flex items-center justify-around w-[60%] border-2 rounded-full px-5 py-2">
                        <FcGoogle className="text-3xl"></FcGoogle>
                        {/* <img src={fbLogo} alt="fb logo" /> */}
                        <span>Continue with Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;