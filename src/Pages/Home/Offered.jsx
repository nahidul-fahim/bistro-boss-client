import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProductCard from "../../Components/ProductCard/ProductCard";


const Offered = () => {


    const [offered, setOffered] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(singleData => singleData.category === 'offered');
                setOffered(filteredData);
            })
    }, [])

    return (
        <section className="container mx-auto my-[90px] flex flex-col justify-center items-center gap-10 p-5">
            <SectionTitle
                subHeading={"Should Try"}
                mainHeading={"CHEF RECOMMENDS"}>
            </SectionTitle>
            <div className="grid grid-cols-3 gap-10">
                {
                    offered.map(product => <ProductCard
                        key={product._id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
        </section>
    );
};

export default Offered;