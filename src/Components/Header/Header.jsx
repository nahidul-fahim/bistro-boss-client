import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider/useAuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart/useCart";


const Header = () => {

    const { currentUser, LogOut } = useAuthProvider();
    const [cart] = useCart();

    const links = <>
        <NavLink className="uppercase font-inter font-semibold text-[16px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#EEFF25" : "white",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: isActive ? "all 1s" : ""
                }
            }}
            to="/">Home</NavLink>

        <NavLink className="uppercase font-inter font-semibold text-[16px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#EEFF25" : "white",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: isActive ? "all 1s" : ""
                }
            }}
            to="/contact">Contact Us</NavLink>

        <NavLink className="uppercase font-inter font-semibold text-[16px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#EEFF25" : "white",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: isActive ? "all 1s" : ""
                }
            }}
            to="/dashboard">Dashboard</NavLink>

        <NavLink className="uppercase font-inter font-semibold text-[16px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#EEFF25" : "white",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: isActive ? "all 1s" : ""
                }
            }}
            to="/menu">Our Menu</NavLink>

        <NavLink className="uppercase font-inter font-semibold text-[16px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#EEFF25" : "white",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: isActive ? "all 1s" : ""
                }
            }}
            to="/allfood/salad">All Food</NavLink>

        {
            currentUser === null ?
                <div className="flex justify-center items-center gap-5">
                    <NavLink className="uppercase font-inter font-semibold text-[16px]"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#EEFF25" : "white",
                                transform: isActive ? "scale(1.1)" : "scale(1)",
                                transition: isActive ? "all 1s" : ""
                            }
                        }}
                        to="/login">Login</NavLink>

                    <NavLink className="uppercase font-inter font-semibold text-[16px]"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#EEFF25" : "white",
                                transform: isActive ? "scale(1.1)" : "scale(1)",
                                transition: isActive ? "all 1s" : ""
                            }
                        }}
                        to="/signup">Sign Up</NavLink>
                </div>
                :
                <div className="flex justify-end items-center gap-5">
                    <button onClick={() => LogOut()} className="uppercase text-white font-inter font-semibold text-[16px]">Log Out</button>
                    <img src={currentUser?.photoURL} alt="" className="w-[50px] h-[50px]" />
                    <Link to="/dashboard/cart" className="flex justify-end items-center gap-1">
                        <FaShoppingCart className="text-2xl text-white" />
                        <div className="badge badge-secondary">{cart.length}</div>
                    </Link>
                </div>

        }
    </>




    return (
        <div className="w-full fixed top-0 right-0 z-10 bg-[#00000048] px-5 py-2"
            style={{
                backdropFilter: 'blur(8px)'
            }}>
            <div className="z-10 w-full flex justify-center items-center gap-5 navbar">

                {/* Left side */}
                <div className="w-[50%] lg:w-[30%] flex justify-start items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl text-white md:text-3xl font-bold uppercase font-sub text-left">Bistro Boss <br /><span className="text-[18px] md:text-xl font-semibold tracking-[5px]">Restaurant</span></a>
                </div>

                {/* right side */}
                <div className="w-[50%] lg:w-[70%] flex justify-end items-center">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5 flex justify-end items-center">
                            {links}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;