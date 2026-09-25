'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/logo.png'
import Link from 'next/link';
import ButtonPlan from '@/app/navbar-component/ButtonPlan';
import ButtonSave from '@/app/navbar-component/ButtonSave';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
        
        <div className='flex justify-between container mx-auto py-7'>
            
            <div className='flex justify-between items-center gap-6'>
               <Image src={Logo} alt='image-logo' height={30} width={30} />
               <h2>FITLOG</h2>
            </div>
            <div className='flex justify-between items-center gap-7'>
                <Link href={'/'}>
            <button className={`px-5 py-2 rounded-4xl ${pathname==='/'?'text-[#C2F800]':'text-white'}`}>Workouts</button>
            </Link>
            <Link href={'/listedFits'}>
            <button className={`px-5 py-2 rounded-4xl ${pathname==='/listedFits'?'text-[#C2F800]':'text-white'}`}>
            My Plan
            </button>
            </Link>
            </div>

            <div className='flex justify-between items-center gap-6'>
               
                  <ButtonPlan/>
                
                   <ButtonSave/>
            </div>
        </div>
    );
};

export default Navbar;