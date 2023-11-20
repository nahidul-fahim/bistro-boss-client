import { Helmet } from "react-helmet";
import loginBg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { Link } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider/useAuthProvider";
import { useRef, useState } from "react";



const SignUp = () => {

    // Hooks and custom hooks
    const { createNewUser, updateUserProfile } = useAuthProvider();
    const formRef = useRef(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const signUpInfo = { name, email, password, photo };
        console.log(signUpInfo);

        const regExPattern = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        setPasswordErrorMessage('');

        if (!regExPattern.test(password)) {
            return setPasswordErrorMessage("Must be at least 6 characters long and contain 1 capital letter, 1 special character");
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(user, name, photo)
                .then(() => {
                    console.log("Profile updated")
                })
                .catch(() => {
                    console.log("profile couldn't updated")
                })
        formRef.current.reset();
    })
            .catch (error => {
    console.log(error.code);
})
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
            <title>Register - Bistro Boss</title>
        </Helmet>

        <Link to="/" className="absolute top-5 left-10"><button className="font-inter font-semibold uppercase hover:text-sub duration-500">Back to home</button></Link>

        {/* main content */}
        <div className="container mx-auto p-5 flex justify-center items-center gap-10 h-[75%] w-[80%] shadow-[0_0_40px_#7371755B] py-8">


            {/* Left side */}
            <div className="w-1/2 flex flex-col justify-center items-center gap-10">
                <h2 className="font-inter text-3xl text-black text-center font-bold">Sign Up</h2>

                {/* Login form */}
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <form ref={formRef} onSubmit={handleSignUp} className="w-full flex flex-col justify-center items-center gap-5">

                        {/* name input */}
                        <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                            <label>
                                <span className="font-inter font-medium">Name</span>
                            </label>
                            <input required type="text" name="name" id="name" placeholder="Enter your name" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                        </div>

                        {/* email input */}
                        <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                            <label>
                                <span className="font-inter font-medium">Email</span>
                            </label>
                            <input required type="email" name="email" id="email" placeholder="Enter valid email" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                        </div>

                        {/* password input */}
                        <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                            <label>
                                <span className="font-inter font-medium">Password</span>
                            </label>
                            <input required type="password" name="password" id="password" placeholder="Enter password" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                        </div>

                        {/* Image input */}
                        <div className="w-2/3 flex flex-col justify-center items-start gap-2">
                            <label>
                                <span className="font-inter font-medium">Photo</span>
                            </label>
                            <input required type="text" name="photo" id="photo" placeholder="Enter photo URL" className="w-full focus:outline-none font-inter px-4 py-3 border-[1px] border-[#d4d4d4] rounded-md" />
                        </div>

                        <div>
                            {
                                passwordErrorMessage ? <p className="text-[#ff5b5b] font-inter text-[14px] font-medium pt-1">{passwordErrorMessage}</p> : ''
                            }
                        </div>

                        {/* Submit button */}
                        <input type="submit" value="Sign Up" className="bg-sub px-5 py-2 rounded w-2/3 font-semibold uppercase text-white hover:bg-white hover:text-sub duration-500 cursor-pointer" />
                    </form>

                    {/* Toggle to login page */}
                    <p className="font-medium text-black font-inter">Already have an account? <span><Link to="/login" className="font-semibold text-sub hover:text-black duration-500">Log in here</Link></span></p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-1/2">
                <img src={loginImg} alt="Login page image" />
            </div>
        </div>
    </div>
);
};

export default SignUp;