import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { FirebaseAuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [errorMsg, setErrorMsg] = useState(null);
    const { createUserNormal } = useContext(FirebaseAuthContext);

    // creating user with the provided informations
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target.firstname.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        const checkbox = e.target.checkbox.checked;

        // reset error
        setErrorMsg(null)

        // form validation
        if (password !== confirm_password) {
            setErrorMsg("Confirm password is not correct.");
            return;
        } else if (checkbox === false) {
            setErrorMsg("Please accept terms and conditions.");
            return;
        }

        // create user with email and password
        createUserNormal(email, password)
        .then(res => {
            console.log(res.user);
            // add firname and lastname
            updateProfile(res.user, {
                firstname: firstname,
                lastname: lastname
            })
            // send verification email
            sendEmailVerification(res.user)
            .then(response => {
                console.log(response);
                // send toast message
                toast("Account Created. Check email for verification.");
            })
            .catch(error => {
                console.log(error.message);
            })
        })
        .catch(err => {
            console.log(err.message);
        })


    }

    return (
        <div className="flex flex-col items-center justify-center border-2 w-[60vw] mx-auto rounded-sm py-16 mt-8">
            <ToastContainer></ToastContainer>
            <div className="flex flex-col gap-6 w-full px-16">
                <h2 className="text-3xl font-bold text-left w-[45vw] mb-3">Register</h2>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-6">
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
                            required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Last Name
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            name="email"
                            type="email"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            required
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
                            required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                    <div className="relative h-11 w-full">
                        <input
                            type="password"
                            name="confirm_password"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#F9A51A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#F9A51A] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#F9A51A] peer-focus:after:scale-x-100 peer-focus:after:border-[#F9A51A] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Confirm Password
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
                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">Remember Me</p>
                            </label>
                        </div>
                        <div>
                            <Link className="text-sm text-[#F9A51A] underline" to="/forgot-password">Forgot Password</Link>
                        </div>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-warning w-full" value="Register" />
                    </div>

                    <p className="text-2xl font-extralight text-center text-red-800">
                        {
                            errorMsg ? errorMsg : ""
                        }
                    </p>

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