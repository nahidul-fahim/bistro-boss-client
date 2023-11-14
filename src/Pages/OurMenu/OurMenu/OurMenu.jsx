import { Helmet } from "react-helmet";
import PageCover from "../../../Components/PageCover/PageCover";
import bgImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenuCategory from "../../../Hooks/useMenuCategory/useMenuCategory";
import MenuItems from "../../../Components/MenuItems/MenuItems";
import desertBg from '../../../assets/menu/dessert-bg.jpeg'
import CategorySectionBg from "../../../Components/CategorySectionBg/CategorySectionBg";
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'

const OurMenu = () => {

    const [output] = useMenuCategory();

    const offereed = output.filter(singleProduct => singleProduct.category === 'offered');
    const desert = output.filter(singleProduct => singleProduct.category === 'dessert');
    const pizza = output.filter(singleProduct => singleProduct.category === 'pizza');


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Menu Page</title>
            </Helmet>
            <PageCover
                bgImg={bgImg}
                heading="Our Menu"
                text="Would you like to try a dish?" />

            {/* Today offer */}

            <div className="my-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <SectionTitle
                    subHeading="Don't Miss"
                    mainHeading="TODAY'S OFFER">
                </SectionTitle>
                <div className="grid grid-cols-2 gap-10">
                    {
                        offereed.map(singleFood => <MenuItems
                            key={singleFood._id}
                            item={singleFood}
                        ></MenuItems>)
                    }
                </div>
                <button className="border-b-2 border-main px-4 py-3 uppercase font-inter font-semibold rounded-lg hover:bg-sub hover:text-white duration-500">Order your favourite food</button>
            </div>

            {/* Desert food section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={desertBg}
                    category="Deserts"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div className="grid grid-cols-2 gap-10">
                    {
                        desert.map(singleFood => <MenuItems
                            key={singleFood._id}
                            item={singleFood}
                        ></MenuItems>)
                    }
                </div>
                <button className="border-b-2 border-main px-4 py-3 uppercase font-inter font-semibold rounded-lg hover:bg-sub hover:text-white duration-500">Order your favourite food</button>
            </div>

            {/* Pizza section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={pizzaBg}
                    category="Pizza"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div className="grid grid-cols-2 gap-10">
                    {
                        pizza.map(singleFood => <MenuItems
                            key={singleFood._id}
                            item={singleFood}
                        ></MenuItems>)
                    }
                </div>
                <button className="border-b-2 border-main px-4 py-3 uppercase font-inter font-semibold rounded-lg hover:bg-sub hover:text-white duration-500">Order your favourite food</button>
            </div>

        </div>
    );
};

export default OurMenu;