import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import { FaUsers } from "react-icons/fa";



const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    // using tanstack query to get data from mongo db
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    // deleting functionality for users from db
    const handleDelete = user => {
        
    }



    return (
        <div className="w-full flex justify-start items-center gap-5 flex-col min-h-[100vh]">
            <SectionTitle
                subHeading="How many?"
                mainHeading="Mange All Users">
            </SectionTitle>

            {/* Cart summary */}
            <div className="flex justify-start items-center w-full mt-12">
                <h3 className="text-3xl font-sub font-semibold">Total Users: {users.length}</h3>
            </div>

            {/* Cart details in table */}
            <div className="w-full">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-inter">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <h4 className="font-medium font-inter text-[14px]">{user.name}</h4>
                                    </td>
                                    <td>
                                        <h4 className="font-medium font-inter text-[14px]">{user.email}</h4>
                                    </td>
                                    <td className="font-inter font-semibold text-[14px]">
                                        <button
                                            className="text-xl bg-sub text-white px-2 py-2 rounded-md"><FaUsers /> </button>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user)}
                                            className="text-xl bg-[#b12121] text-white px-2 py-2 rounded-md"><RiDeleteBin5Line /> </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;