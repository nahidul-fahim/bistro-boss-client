

const SectionTitle = ({ subHeading, mainHeading }) => {

    


    return (
        <div className="w-[40%] px-7 mx-auto">
            <p className="text-sub text-inter font-medium italic text-center border-b-2 pb-6 border-[#E8E8E8]">---{subHeading}---</p>
            <h3 className="text-4xl mt-5 text-black font-inter uppercase text-center font-regular border-b-2 pb-6 border-[#E8E8E8]">{mainHeading}</h3>
        </div>
    );
};

export default SectionTitle;