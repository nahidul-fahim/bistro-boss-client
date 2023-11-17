import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <div className="h-[100vh] flex justify-center items-center"><h2 className="text-2xl font-bold text-center font-inter">Loading...</h2></div>
    }




    return (

        <section className="my-[90px] container mx-auto p-5 flex flex-col justify-center items-center gap-10">

            <SectionTitle
                subHeading="What Our Clients Say"
                mainHeading="Testimonials">
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                            />
                            <p className="font-inter text-[14px] text-black">{review.details}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </section>


    );
};

export default Testimonial;