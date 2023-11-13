
import bgImg from '../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div className="my-[100px] container mx-auto p-[100px] flex justify-center items-center"
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
            <div className='bg-white space-y-3 py-[90px] w-full flex flex-col justify-center items-center'>
                <h2 className='text-center text-5xl font-sub text-black '>Birstro Boss</h2>
                <p className='font-inter text-[#000000] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default About;