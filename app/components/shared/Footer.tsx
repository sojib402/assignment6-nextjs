import React from 'react';
import Logo from '../../assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center bg-[#0F1117] border-t border-gray-800 px-6 py-5 gap-4 sm:gap-0'>
            <div className='flex justify-between items-center gap-6'>
                <Image src={Logo} alt='image-logo' height={30} width={30} />
                <h2 className='text-white'>FITLOG</h2>
            </div>
            <div>
                <p className='text-gray-500 text-xs text-center sm:text-left'>
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </div>
    );
};

export default Footer;