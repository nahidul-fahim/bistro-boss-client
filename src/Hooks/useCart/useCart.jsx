import { useQuery } from "@tanstack/react-query";


const useCart = () => {

    const { data: cart=[]} = useQuery({
        queryKey: ['cart'],
        queryFn: () => {

        }
    })


    return [cart]
};

export default useCart;