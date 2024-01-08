import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Components/MenuItems/MenuItems";
import useMenuCategory from "../../Hooks/useMenuCategory/useMenuCategory";


const Menus = () => {

    const [output] = useMenuCategory();
    const menus = output.filter(singleData => singleData.category === 'popular')

    console.log(menus);


    return (
        <section className="container mx-auto my-[90px] flex flex-col justify-center items-center gap-10 p-5">
            <SectionTitle
                subHeading={"Check it out"}
                mainHeading={"From our menu"}>
            </SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menus.map(item => <MenuItems
                        key={item._id}
                        item={item}>
                    </MenuItems>)
                }
            </div>
        </section>
    );
};

export default Menus;