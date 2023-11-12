import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

//slide images
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                autoplay={true}
            >
                <SwiperSlide className='relative flex justify-center items-center'>
                    <img src={slide1} alt="" />
                    <h3 className='absolute bottom-8 left-[30%] text-center text-2xl font-sub text-white  font-medium '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide className='relative flex justify-center items-center'>
                    <img src={slide2} alt="" />
                    <h3 className='absolute bottom-8 left-[30%] text-center text-2xl font-sub text-white  font-medium '>Soups</h3>
                </SwiperSlide>
                <SwiperSlide className='relative flex justify-center items-center'>
                    <img src={slide3} alt="" />
                    <h3 className='absolute bottom-8 left-[30%] text-center text-2xl font-sub text-white  font-medium '>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className='relative flex justify-center items-center'>
                    <img src={slide4} alt="" />
                    <h3 className='absolute bottom-8 left-[30%] text-center text-2xl font-sub text-white  font-medium '>Deserts</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;
