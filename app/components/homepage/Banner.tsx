import React from 'react';
import Image from 'next/image';
import BannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='container mx-auto flex justify-around bg-[#9CA3AF]'>
            <div className='py-20'>
                <h2 className='text-[#C2F800] mb-5'>WORKOUT LIBRARY</h2>
                <h1 className='text-white text-4xl'>TRAIN WITH INTENT. LOG<br/>EVERY SET.</h1>
                <h2 className='py-5'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>into today's plan, and watch the week's work add up.</h2>
                <button className='text-black p-3 bg-[#C2F800] rounded-2xl'>BROWSE WORKOUTS</button>
            </div>
            <div className='py-22'>
             <Image src={BannerImg} alt='BannerImg' height={600} width={200}/>
            </div>
        </div>
    );
};

export default Banner;