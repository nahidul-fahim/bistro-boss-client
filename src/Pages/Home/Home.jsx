import About from "./About";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Offered from "./Offered";
import Menus from "./Menus";
// import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Birstro Boss Homepage</title>
            </Helmet>
            <Banner />
            <Category />
            <About />
            <Menus />
            <CallUs />
            <Offered />
            {/* <Testimonial /> */}
        </div>
    );
};

export default Home;