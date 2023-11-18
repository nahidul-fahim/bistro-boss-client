import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet";
import loginBg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';


const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Captcha validation
    const handleCaptchaValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    // Login functionality
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const logInInfo = { email, password };
        console.log(logInInfo);


    }



    return (
        <div className="h-[100vh] flex justify-center items-center relative"
            style={{
                background: `url(${loginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            {/* website page name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Bistro Boss</title>
            </Helmet>

            <Link to="/" className="absolute top-5 left-10"><button className="font-inter font-semibold uppercase hover:text-sub duration-500">Back to home</button></Link>

            {/* main content */}
            <div className="container mx-auto p-5 flex justify-center items-center gap-10 h-[75%] w-[80%] shadow-[0_0_40px_#7371755B] py-8">
                {/* Left side */}
                <div className="w-1/2">
                    <img src={loginImg} alt="Login page image" />
                </div>

                {/* right side */}
                <div className="w-1/2 flex flex-col justify-center items-center gap-10">
                    <h2 className="font-inter text-3xl text-black text-center font-bold">Login</h2>

                    {/* Login form */}
                    <div className="w-full flex flex-col justify-center items-center gap-5">
                        <form onSubmit={handleLogin} className="w-full flex flex-col justify-center items-center gap-5">

                            {/* email input */}
                            <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                                <label>
                                    <span className="font-inter font-medium">Email</span>
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter email" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                            </div>

                            {/* password input */}
                            <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                                <label>
                                    <span className="font-inter font-medium">Password</span>
                                </label>
                                <input type="password" name="password" id="password" placeholder="Enter password" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                            </div>

                            {/* Captcha input and authentication */}
                            <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                                <LoadCanvasTemplate />
                                <input ref={captchaRef} type="text" name="captcha" id="captcha" placeholder="Enter the above text here" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                                <button onClick={handleCaptchaValidate} className='text-[14px] border-[1px] border-[lightgray] hover:border-sub duration-300 px-3 py-1 font-inter text-[gray] rounded'>Validate Captcha</button>
                            </div>

                            {/* Submit button */}
                            <input disabled={disabled} type="submit" value="Login" className="bg-sub px-5 py-2 rounded w-2/3 font-semibold uppercase text-white hover:bg-white hover:text-sub duration-500 cursor-pointer disabled:bg-[gray] disabled:text-[lightgray] disabled:cursor-not-allowed" />
                        </form>

                        {/* Toggle to signup page */}
                        <p className="font-medium text-black font-inter">New here? <span><Link to="/signup" className="font-semibold text-sub hover:text-black duration-500">Sign up here</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;