'use client'
import { FitsContext } from '@/app/context/FitsContext';
import { IFit } from '@/app/types/books.type';
import React, { useContext } from 'react';

const PlanButton = ({fit}:{fit:IFit}) => {
    const {addPlans,setAddPlans}=useContext(FitsContext)
    const handlePlan=()=>{
        console.log('read button is triggered',fit)
        setAddPlans([...addPlans,fit])
        alert(`you have read '${fit.name}'`)
    }
    return (
        <div>
            <button onClick={()=>handlePlan()} className='bg-[#CCFF00] px-3 py-2 rounded-2xl text-black'>
                           🗓️ Add to today's plan
          </button>
        </div>
    );
};

export default PlanButton;