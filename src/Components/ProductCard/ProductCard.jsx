import { useLocation, useNavigate } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider/useAuthProvider";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../Hooks/useCart/useCart";



const ProductCard = ({ product }) => {

    const { name, recipe, image, price, _id } = product;
    const { currentUser } = useAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (currentUser && currentUser.email) {
            const cartItem = {
                foodId: _id,
                email: currentUser.email,
                name: name,
                recipe: recipe,
                image: image,
                price: price
            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // refetch the data in tanstack query hook to count the cart item automatically
                        refetch();
                        Swal.fire({
                            position: "bottom-end",
                            icon: "success",
                            title: "Product added to the cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
                .catch(error => {
                    console.log(error.code, error.message);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.code}`,
                    });
                })


        }
        else {
            Swal.fire({
                title: "You are not logged in.",
                text: "Please login first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }






    }

    return (
        <div className="flex flex-col justify-center items-center gap-2 text-center">
            <div className="relative">
                <img src={image} alt="" />
                <p className="absolute bg-black text-white font-inter px-4 py-1 top-3 right-5 font-medium">${price}</p>
            </div>
            <h3 className="mt-5 text-2xl font-bold font-inter text-black">{name}</h3>
            <p className="text-[gray] font-inter mt-4">{recipe}</p>
            <button onClick={handleAddToCart}
                className="mt-5 px-4 py-2 rounded uppercase text-[18px] font-medium tracking-[1px] font-inter text-sub bg-third border-b-2 border-sub hover:bg-main hover:border-[#ffffff00] duration-500">Add to Cart</button>
        </div>
    );
};

export default ProductCard;