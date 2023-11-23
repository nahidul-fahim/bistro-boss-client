import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../useAuthProvider/useAuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useAdmin = () => {

    const { currentUser } = useAuthProvider();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin } = useQuery({
        queryKey: [currentUser?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${currentUser.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
    });

    return [isAdmin];
};

export default useAdmin;