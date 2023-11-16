

const CategorySectionBg = ({ categoryBgImg, category, description }) => {



    return (
        <div className="mb-[100px] container mx-auto p-[100px] flex justify-center items-center"
            style={{
                background: `url(${categoryBgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
            <div className='bg-[#15151599] space-y-3 py-[90px] w-full flex flex-col justify-center items-center'>
                <h2 className='text-center text-5xl font-sub text-white '>{category}</h2>
                <p className='font-inter text-white text-[14px] text-center w-[70%]'>{description}</p>
            </div>
        </div>
    );
};

export default CategorySectionBg;