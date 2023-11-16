

const MenuItems = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div>
            <div className="flex gap-4 justify-center items-center bg-cover w-full">
                <div>
                    <img src={image} alt="" className="w-[140px] h-[110px] rounded-r-[50%] rounded-b-[50%]" />
                </div>
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-xl text-black font-sub">{name} -----------</h3>
                        <p className="text-sub font-inter text-xl">${price}</p>
                    </div>
                    <p className="font-inter text-[gray] w-full">{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;