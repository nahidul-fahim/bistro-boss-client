import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useMenuCategory from "../../Hooks/useMenuCategory/useMenuCategory";


const Offered = () => {

    const [output] = useMenuCategory();
    const offered = output.filter(singledata => singledata.category === 'offered');

    return (
        <section className="container mx-auto my-[90px] flex flex-col justify-center items-center gap-10 p-5">
            <SectionTitle
                subHeading={"Should Try"}
                mainHeading={"CHEF RECOMMENDS"}>
            </SectionTitle>
            <div className="grid grid-cols-3 gap-10">
                {
                    offered.slice(0, 3).map(product => <ProductCard
                        key={product._id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
        </section>
    );
};

export default Offered;