import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuthProvider from "../useAuthProvider/useAuthProvider";


const useCart = () => {
    const { currentUser } = useAuthProvider();

    const axiosSecure = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', currentUser?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${currentUser?.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;