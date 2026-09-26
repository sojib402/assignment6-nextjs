'use client'
import React, { useContext } from 'react';
import { FitsContext } from '../context/FitsContext';
import Link from 'next/link';
const ButtonSave = () => {
    const { addSave } = useContext(FitsContext)
    return (
        <div className='flex gap-2'>
            <Link href='/listedFits'>
            <button>Saved</button>
            </Link>

            <button className='text-white border border-white rounded-full px-2 text-black'>{addSave.length}</button>
        </div>
    );
};

export default ButtonSave;