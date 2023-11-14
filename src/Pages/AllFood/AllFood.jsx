import { Helmet } from "react-helmet";
import PageCover from "../../Components/PageCover/PageCover";
import pageBg from '../../assets/shop/banner2.jpg'
import useMenuCategory from "../../Hooks/useMenuCategory/useMenuCategory";
import { NavLink } from "react-router-dom";

const AllFood = () => {

    const [output] = useMenuCategory();



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Foods Page</title>
            </Helmet>
            <PageCover
                bgImg={pageBg}
                heading="All foods"
                text="Would you like to try a dish?" />


            {/* Category section */}
            <div className="space-x-5">
                {
                    output.map(category => <NavLink key={category._id}>{category.category}</NavLink>)
                }
            </div>

        </div>
    );
};

export default AllFood;