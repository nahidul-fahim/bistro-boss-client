import { useEffect, useState } from "react";

const useMenuCategory = () => {

    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setOutput(data);
                setLoading(false);
            })
    }, [])

    return [output, loading]
};

export default useMenuCategory;