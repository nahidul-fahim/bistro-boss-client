import { Helmet } from "react-helmet";
import loginBg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'


const Login = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center"
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

            {/* main content */}
            <div className="container mx-auto p-5 flex justify-center items-center gap-10 h-[75%] w-[80%] shadow-2xl">
                {/* Left side */}
                <div className="w-1/2">
                    <img src={loginImg} alt="Login page image" />
                </div>

                {/* right side */}
                <div className="w-1/2 flex flex-col justify-center items-center gap-10">
                    <h2 className="font-inter text-3xl text-black text-center font-bold">Login</h2>
                    <form className="w-full flex flex-col justify-center items-center gap-7">

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

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;