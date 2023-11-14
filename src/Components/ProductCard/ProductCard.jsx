

const ProductCard = ({ product }) => {

    const { name, recipe, image, price } = product;

    return (
        <div className="flex flex-col justify-center items-center gap-2 text-center">
            <div className="relative">
                <img src={image} alt="" />
                <p className="absolute bg-black text-white font-inter px-4 py-1 top-3 right-5 font-medium">${price}</p>
            </div>
            <h3 className="mt-5 text-2xl font-bold font-inter text-black">{name}</h3>
            <p className="text-[gray] font-inter mt-4">{recipe}</p>
            <button className="mt-5 px-4 py-2 rounded uppercase text-[18px] font-medium tracking-[1px] font-inter text-sub bg-third border-b-2 border-sub hover:bg-main hover:border-[#ffffff00] duration-500">Add to Cart</button>
        </div>
    );
};

export default ProductCard;