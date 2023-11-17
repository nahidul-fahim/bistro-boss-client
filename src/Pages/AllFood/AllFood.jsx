import { Helmet } from "react-helmet";
import PageCover from "../../Components/PageCover/PageCover";
import pageBg from '../../assets/shop/banner2.jpg'
import useMenuCategory from "../../Hooks/useMenuCategory/useMenuCategory";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

const AllFood = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialCategory = categories.indexOf(category);
    const [output] = useMenuCategory();
    const [tabIndex, setTabIndex] = useState(initialCategory);
    const salad = output.filter(singleItem => singleItem.category === 'salad');
    const pizza = output.filter(singleItem => singleItem.category === 'pizza');
    const soup = output.filter(singleItem => singleItem.category === 'soup');
    const dessert = output.filter(singleItem => singleItem.category === 'dessert');
    const drinks = output.filter(singleItem => singleItem.category === 'drinks');


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Page</title>
            </Helmet>
            <PageCover
                bgImg={pageBg}
                heading="All foods"
                text="Would you like to try a dish?" />


            {/* Category section */}
            <div className="flex flex-col justify-center items-center container mx-auto p-5">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab >Salad</Tab>
                        <Tab >Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 w-[90%] mt-[80px] mx-auto">
                            {
                                salad.map(singleSalad => <ProductCard
                                    key={singleSalad._id}
                                    product={singleSalad}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 w-[90%] mt-[80px] mx-auto">
                            {
                                pizza.map(singleSalad => <ProductCard
                                    key={singleSalad._id}
                                    product={singleSalad}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 w-[90%] mt-[80px] mx-auto">
                            {
                                soup.map(singleSalad => <ProductCard
                                    key={singleSalad._id}
                                    product={singleSalad}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 w-[90%] mt-[80px] mx-auto">
                            {
                                dessert.map(singleSalad => <ProductCard
                                    key={singleSalad._id}
                                    product={singleSalad}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-10 w-[90%] mt-[80px] mx-auto">
                            {
                                drinks.map(singleSalad => <ProductCard
                                    key={singleSalad._id}
                                    product={singleSalad}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default AllFood;