import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { GlobalContext } from "../../providers/GlobalProvider";

const Login = () => {

    const {isLoggedIn} = useContext(GlobalContext);

    if (isLoggedIn) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="flex flex-col items-center justify-center border-2 w-[60vw] mx-auto rounded-sm py-16 mt-8">
            <div className="flex flex-col gap-6 w-full px-16">
                <h2 className="text-3xl font-bold text-left w-[45vw] mb-3">Login</h2>
                <div className="relative h-11 w-full">
                    <input
                        name="name"
                        type="text"
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

                <div className="flex justify-between items-center">
                    <div className="inline-flex items-center">
                        <label
                            className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                            htmlFor="checkbox"
                            data-ripple-dark="true">
                            <input
                                type="checkbox"
                                name="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-800 before:opacity-0 before:transition-opacity checked:border-[#F9A51A] checked:bg-[#F9A51A] checked:before:bg-[#F9A51A] hover:before:opacity-10"
                                id="checkbox"
                            />
                            <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                        </label>
                        <label className="mt-px cursor-pointer select-none font-light text-gray-700" htmlFor="checkbox">
                            <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">Remeber Me</p>
                        </label>
                    </div>
                    <div>
                        <Link className="text-sm text-[#F9A51A] underline" to="/forgot-password">Forgot Password</Link>
                    </div>
                </div>
                <div>
                    <button className="btn btn-warning w-full">Login</button>
                </div>
                <div className="flex items-center justify-center">
                    <span>Don't have an account? <Link to="/register" className="text-sm text-[#F9A51A] underline ml-1">Create an Account</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;