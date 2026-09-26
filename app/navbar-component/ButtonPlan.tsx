'use client'
import React, { useContext } from 'react';
import { FitsContext } from '../context/FitsContext';
import Link from 'next/link';
const ButtonPlan = () => {
    const { addPlans }: { addPlans: Array<{ id: string | number }> } = useContext(FitsContext);
    return (
        <div className='flex gap-2'>
            <Link href='/listedFits'>
                <button className='text-sm sm:text-base'>Plan</button>
            </Link>

            <button className='bg-[#C2F800] rounded-full px-2 text-black text-sm sm:text-base'>{addPlans.length}</button>
        </div>
    );
};

export default ButtonPlan;