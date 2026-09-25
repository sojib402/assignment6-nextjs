'use client'
import { FitsContext } from '@/app/context/FitsContext';
import React, { useContext } from 'react';

const ListedFits = () => {
    const {addPlans,addSave}=useContext(FitsContext)
    console.log(addPlans,addSave,'from listed fit')
    return (
        <div>
            Listed Fits
            {addPlans.length}
        </div>
    );
};

export default ListedFits;