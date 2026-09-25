import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/logo.png'
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto py-7'>
            
            <div className='flex justify-between items-center gap-6'>
               <Image src={Logo} alt='image-logo' height={30} width={30} />
               <h2>FITLOG</h2>
            </div>
            <div className='flex justify-between items-center gap-7'>
                <Link href={'/'}>
            <button className='text-[#C2F800] px-5 py-2 rounded-4xl'>Workouts</button>
            </Link>
            <Link href={'/'}>My Plan</Link>
            </div>

            <div className='flex justify-between items-center gap-6'>
                  <h2>Plan</h2>
                  <h2>Saved</h2>
            </div>
        </div>
    );
};

export default Navbar;