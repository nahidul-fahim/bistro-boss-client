import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center gap-5">
            <h2 className="text-center text-[200px] font-extrabold font-inter">404</h2>
            <Link to="/"><button className="font-inter uppercase text-xl px-5 py-2 rounded bg-sub text-white font-semibold tracking-[2px]">BACK TO HOME</button></Link>
        </div>
    );
};

export default ErrorPage;