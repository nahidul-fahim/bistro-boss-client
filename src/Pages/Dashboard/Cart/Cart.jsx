import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../Hooks/useCart/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2'


const Cart = () => {


    const [cart, refetch] = useCart();
    const total = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = total.toFixed(2);
    const axiosSecure = useAxiosSecure();


    // Delete item from cart
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.code))
            }
        });


    }




    return (
        <div className="w-full flex justify-start items-center gap-5 flex-col min-h-[100vh]">
            <SectionTitle
                subHeading="My Cart"
                mainHeading="Wanna Add More?">
            </SectionTitle>

            {/* Cart summary */}
            <div className="flex justify-around items-center w-full mt-12">
                <h3 className="text-3xl font-sub font-medium">Total Order: {cart.length}</h3>
                <h3 className="text-3xl font-sub font-medium">Total Price: ${totalPrice}</h3>
                <button className="bg-sub text-white px-4 py-2 rounded-md font-sub text-[18px]">Pay</button>
            </div>

            {/* Cart details in table */}
            <div className="w-full">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-inter">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Nam </th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h4 className="font-medium font-inter text-[14px]">{item.name}</h4>
                                    </td>
                                    <td className="font-inter font-semibold text-[14px]">${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)}
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

export default Cart;