

const PageCover = ({ bgImg, heading, text }) => {
    return (
        <div className="h-[700px] mx-auto flex justify-center items-center px-[90px]"
            style={{
                background: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}>
            <div className="container mx-auto bg-[#15151599] flex justify-center items-center flex-col gap-5 py-[120px]">
                <h2 className="text-7xl font-sub uppercase font-medium text-white text-center">{heading}</h2>
                <p className="text-xl font-sub text-center text-white">{text}</p>
            </div>
        </div>
    );
};

export default PageCover;