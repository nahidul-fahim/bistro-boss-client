import { Helmet } from "react-helmet";
import PageCover from "../../../Components/PageCover/PageCover";
import bgImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenuCategory from "../../../Hooks/useMenuCategory/useMenuCategory";
import desertBg from '../../../assets/menu/dessert-bg.jpeg'
import CategorySectionBg from "../../../Components/CategorySectionBg/CategorySectionBg";
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import FoodCategory from "../../../Components/FoodCategory/FoodCategory";


const OurMenu = () => {

    const [output] = useMenuCategory();

    const offereed = output.filter(singleProduct => singleProduct.category === 'offered');
    const dessert = output.filter(singleProduct => singleProduct.category === 'dessert');
    const pizza = output.filter(singleProduct => singleProduct.category === 'pizza');
    const salad = output.filter(singleProduct => singleProduct.category === 'salad');
    const soup = output.filter(singleProduct => singleProduct.category === 'soup');


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
            <div className="mt-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <SectionTitle
                    subHeading="Don't Miss"
                    mainHeading="TODAY'S OFFER">
                </SectionTitle>
                <div>
                    <FoodCategory items={offereed} category="salad"></FoodCategory>
                </div>
            </div>


            {/* Desert food section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={desertBg}
                    category="Deserts"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div>
                    <FoodCategory items={dessert} category={"dessert"} />
                </div>
            </div>

            {/* Pizza section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={pizzaBg}
                    category="Pizza"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div>
                    <FoodCategory items={pizza} category={"pizza"} />
                </div>
            </div>


            {/* Salad section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={saladBg}
                    category="Salad"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div>
                    <FoodCategory items={salad} category={"salad"} />
                </div>
            </div>


            {/* soup section */}
            <div className="mb-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-12">
                <CategorySectionBg
                    categoryBgImg={soupBg}
                    category="Soup"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

                <div>
                    <FoodCategory items={soup} category={"soup"} />
                </div>
            </div>

        </div>
    );
};

export default OurMenu;