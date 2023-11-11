import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    // Get current year
    const year = new Date().getFullYear();
    console.log(year);


    return (
        <div>
            <footer className="bg-main text-neutral-content font-inter pt-10">
                <div className="container gap-0 mx-auto flex justify-center items-center">

                    <div className="w-[50%] flex justify-center items-center text-center flex-col gap-3">
                        <h3 className="text-xl font-semibold uppercase text-center font-inter">CONTACT US</h3>
                        <p className="text-[14px]">123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>
                    </div>
                    <div className="w-[50%] flex justify-center items-center flex-col">
                        <header className="footer-title">Social</header>
                        <div className="flex justify-center items-center gap-8 text-2xl">
                            <a><FaFacebookF /></a>
                            <a><FaInstagram /></a>
                            <a><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="bg-black text-white text-center w-full font-inter font-medium mt-10 p-3">
                    <p>{`Copyright © ${year} CulinaryCloud. All rights reserved.`}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;