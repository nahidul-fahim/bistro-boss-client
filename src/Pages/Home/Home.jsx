import About from "./About";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Offered from "./Offered";
import OurMenu from "./OurMenu";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <About />
            <OurMenu />
            <CallUs />
            <Offered />
            <Testimonial />
        </div>
    );
};

export default Home;