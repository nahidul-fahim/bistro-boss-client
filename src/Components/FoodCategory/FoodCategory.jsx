import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";


const FoodCategory = ({ items, category }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="grid grid-cols-2 gap-10">
                {
                    items.map(singleFood => <MenuItems
                        key={singleFood._id}
                        item={singleFood}
                    ></MenuItems>)
                }
            </div>
            <Link to={`allfood/${category}`}> <button className="border-b-2 border-main px-4 py-3 uppercase font-inter font-semibold rounded-lg hover:bg-sub hover:text-white duration-500">Order your favourite food</button></Link>
        </div>
    );
};

export default FoodCategory;