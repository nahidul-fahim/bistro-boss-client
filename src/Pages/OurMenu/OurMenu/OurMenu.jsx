import { Helmet } from "react-helmet";
import PageCover from "../../../Components/PageCover/PageCover";
import bgImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";

const OurMenu = () => {

const [ ] = useState([]);



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

            <div className="my-[90px] container mx-auto p-5">
                <SectionTitle
                    subHeading="Don't Miss"
                    mainHeading="TODAY'S OFFER">
                </SectionTitle>
            </div>

        </div>
    );
};

export default OurMenu;