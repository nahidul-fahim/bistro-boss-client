import { FaBars, FaCalendar, FaCalendarDay, FaCartPlus, FaHome, FaShoppingBag, FaStar, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const SidebarLinks = <>

        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/">
            <FaHome className="text-2xl" />
            User Home
        </NavLink>


        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/cart">
            <FaCartPlus className="text-2xl" />
            My Cart
        </NavLink>

        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/">
            <FaCalendar className="text-2xl" />
            Reservation
        </NavLink>

        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/">
            <FaWallet className="text-2xl" />
            Payment History
        </NavLink>

        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/">
            <FaStar className="text-2xl" />
            Add Review
        </NavLink>

        <NavLink className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "black",
                    transition: isActive ? "all .3s" : ""
                }
            }}
            to="/dashboard/">
            <FaCalendarDay className="text-2xl" />
            My Bookings
        </NavLink>
    </>


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center p-8">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>

            <div className="drawer-side bg-sub text-black">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full flex flex-col justify-start items-start gap-7">
                    {/* Sidebar content here */}
                    {SidebarLinks}
                    <div className="divider"></div>
                    <Link to="/" className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4">
                        <FaHome className="text-2xl" />
                        Home
                    </Link>

                    <Link to="/menu" className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4">
                        <FaBars className="text-2xl" />
                        Menu
                    </Link>

                    <Link to="/allfood/salad" className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4">
                        <FaShoppingBag className="text-2xl" />
                        Shop
                    </Link>

                    <Link to="/contact" className="uppercase font-sub font-medium text-[16px] flex justify-start items-center gap-4">
                        <FaHome className="text-2xl" />
                        Contact
                    </Link>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;